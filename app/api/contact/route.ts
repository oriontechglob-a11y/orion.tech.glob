import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/validation";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 10_000;
const submissions = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = submissions.get(ip);

  if (!current || current.resetAt <= now) {
    submissions.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  return false;
}

function cleanHeaderValue(value: string) {
  return value.replace(/[\r\n]/g, " ").trim();
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Message is too large." }, { status: 413 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email delivery is not configured yet." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { name, email, subject, message } = result.data;
  const safeSubject = cleanHeaderValue(subject);

  try {
    await resend.emails.send({
      from: "Shree Hari Hardware Mart Website <onboarding@resend.dev>",
      to: "shreeharihardwaremart@gmail.com",
      replyTo: email,
      subject: `New Shree Hari Hardware Mart inquiry: ${safeSubject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${safeSubject}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We could not send the email right now." }, { status: 500 });
  }
}
