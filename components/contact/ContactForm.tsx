"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/shared/Button";
import { childReveal } from "@/components/shared/AnimatedSection";
import { contactSchema, type ContactFormValues } from "@/lib/validation";

const fields = [
  { name: "name", label: "Name", placeholder: "Your name", type: "text" },
  { name: "email", label: "Email", placeholder: "you@example.com", type: "email" },
  { name: "subject", label: "Subject", placeholder: "Project inquiry", type: "text" },
] as const;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      toast.error(payload?.error ?? "Could not send your message. Please try again.");
      return;
    }

    toast.success("Thanks. Your message has been sent to Orion Tech.");
    reset();
  };

  return (
    <motion.form
      variants={childReveal}
      onSubmit={handleSubmit(onSubmit)}
      className="depth-card rounded-md border border-border bg-white p-6 shadow-2xl shadow-primary/10 sm:p-8"
      noValidate
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("website")}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <label
            key={field.name}
            className={field.name === "subject" ? "sm:col-span-2" : undefined}
          >
            <span className="mb-2 block text-sm font-bold text-primary">{field.label}</span>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="min-h-12 w-full rounded-md border border-border bg-surface px-4 text-primary outline-none transition-colors focus:border-accent focus:bg-white"
              aria-invalid={Boolean(errors[field.name])}
              {...register(field.name)}
            />
            {errors[field.name] && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm font-medium text-destructive"
              >
                {errors[field.name]?.message}
              </motion.p>
            )}
          </label>
        ))}
        <label className="sm:col-span-2">
          <span className="mb-2 block text-sm font-bold text-primary">Message</span>
          <textarea
            placeholder="Tell us what you want to build, what stage you are in, and any timeline you have in mind."
            rows={6}
            className="w-full rounded-md border border-border bg-surface px-4 py-3 text-primary outline-none transition-colors focus:border-accent focus:bg-white"
            aria-invalid={Boolean(errors.message)}
            {...register("message")}
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm font-medium text-destructive"
            >
              {errors.message.message}
            </motion.p>
          )}
        </label>
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        {isSubmitting ? "Sending" : "Send Message"}
      </Button>
    </motion.form>
  );
}
