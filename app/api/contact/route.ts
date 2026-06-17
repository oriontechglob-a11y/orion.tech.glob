import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
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

  try {
    await resend.emails.send({
      from: "Orion Tech Website <onboarding@resend.dev>",
      to: "oriontech.glob@gmail.com",
      replyTo: email,
      subject: `New Orion Tech inquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We could not send the email right now." }, { status: 500 });
  }
}
