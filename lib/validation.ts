import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  subject: z.string().trim().min(4, "Please add a short subject."),
  message: z.string().trim().min(20, "Please share a few more details."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
