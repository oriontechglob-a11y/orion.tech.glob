import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name is too long."),
  email: z.email("Please enter a valid email address.").max(254, "Email is too long."),
  subject: z.string().trim().min(4, "Please add a short subject.").max(120, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(20, "Please share a few more details.")
    .max(2000, "Message is too long."),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
