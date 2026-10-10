import { z } from "zod";

const phoneSchema = z
  .string()
  .trim()
  .min(8, "Enter a valid phone number.")
  .max(20, "Enter a valid phone number.")
  .regex(/^[0-9+().\-\s]+$/, "Use digits and standard phone characters.")
  .refine((value) => {
    const digits = value.replace(/\D/g, "").length;
    return digits >= 8 && digits <= 15;
  }, "Enter a valid phone number.");

export const leadFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .max(120, "Email must be 120 characters or fewer.")
    .email("Enter a valid email address."),
  phone: phoneSchema,
  experience: z
    .string()
    .trim()
    .max(80, "Experience must be 80 characters or fewer."),
  message: z
    .string()
    .trim()
    .max(1000, "Message must be 1000 characters or fewer."),
  companyWebsite: z.string().optional(),
});

export const leadSubmissionSchema = leadFormSchema.extend({
  source: z
    .string()
    .trim()
    .min(1)
    .max(80)
    .regex(/^[\w][\w '&.,-]*$/, "Invalid lead source."),
  pageUrl: z
    .string()
    .trim()
    .max(500)
    .refine(
      (value) => value.length === 0 || /^https?:\/\//i.test(value),
      "Invalid page URL.",
    ),
  userAgent: z.string().trim().max(400),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
export type LeadSubmission = z.infer<typeof leadSubmissionSchema>;
