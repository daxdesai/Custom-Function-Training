"use client";

import { useLead } from "@/components/LeadProvider";
import { experienceLevels, leadSources } from "@/lib/content";
import { leadFormSchema, type LeadFormValues } from "@/lib/leadSchema";
import { submitLead } from "@/lib/submitLead";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";

const inputClass =
  "h-12 w-full rounded-xl border bg-white px-3.5 text-base text-ink outline-none placeholder:text-muted/70 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10";

function intentCopy(source: string) {
  if (source.toLowerCase().includes("demo")) {
    return {
      eyebrow: "Demo class",
      title: "Book a Demo Class",
      text: "Tell us how to reach you. We will follow up about a demo class.",
    };
  }

  if (source === leadSources.contactForm) {
    return {
      eyebrow: "Enrollment",
      title: "Get Started",
      text: "Share your details to enroll or ask about a demo class. We will get in touch shortly.",
    };
  }

  return {
    eyebrow: "Enrollment",
    title: "Enroll in Custom Function Training",
    text: "Share your details and we will get in touch about joining the training.",
  };
}

export function LeadForm() {
  const { revision } = useLead();
  return <LeadFormFields key={revision} />;
}

function LeadFormFields() {
  const { source } = useLead();
  const copy = intentCopy(source);
  const successRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experience: "",
      message: "",
      companyWebsite: "",
    },
  });

  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
    }
    if (status === "error") {
      errorRef.current?.focus();
    }
  }, [status]);

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    setErrorMessage("");

    if (values.companyWebsite?.trim()) {
      setStatus("success");
      return;
    }

    const result = await submitLead({
      name: values.name,
      email: values.email,
      phone: values.phone,
      experience: values.experience,
      message: values.message,
      source,
      pageUrl: window.location.href,
      userAgent: navigator.userAgent.slice(0, 400),
      companyWebsite: "",
    });

    if (!result.ok) {
      setErrorMessage(result.message);
      setStatus("error");
      return;
    }

    reset();
    setStatus("success");
  });

  return (
    <section
      id="enroll"
      className="section-anchor bg-surface py-20 sm:py-28"
      aria-labelledby="enroll-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
            {copy.eyebrow}
          </p>
          <h2
            id="enroll-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            {copy.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted sm:text-lg">
            {copy.text}
          </p>
          <ol className="mt-8 space-y-4">
            {[
              "Share your name, email, and phone.",
              "Add your experience level or a note if you want.",
              "We get in touch about enrollment or a demo class.",
            ].map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-6 text-navy-800">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white font-mono text-xs text-indigo-700 shadow-soft">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-8">
          {status === "success" ? (
            <div role="status" aria-live="polite" className="px-2 py-10 text-center">
              <div className="mx-auto grid size-14 place-items-center rounded-full bg-success/10 text-success">
                <CircleCheck className="size-7" aria-hidden="true" />
              </div>
              <h3
                ref={successRef}
                tabIndex={-1}
                className="mt-5 text-2xl font-semibold tracking-tight text-ink"
              >
                You’re on the list!
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-base leading-7 text-muted">
                Thank you for your interest. We’ll get in touch with you shortly.
              </p>
              <button
                type="button"
                className="mt-6 cursor-pointer text-sm font-semibold text-indigo-700"
                onClick={() => setStatus("idle")}
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form className="relative space-y-4" onSubmit={onSubmit} noValidate>
              <Field
                id="lead-name"
                label="Full name"
                required
                error={errors.name?.message}
              >
                <input
                  id="lead-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "lead-name-error" : undefined}
                  className={`${inputClass} ${errors.name ? "border-danger" : "border-line"}`}
                  {...register("name")}
                />
              </Field>

              <Field
                id="lead-email"
                label="Email address"
                required
                error={errors.email?.message}
              >
                <input
                  id="lead-email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@email.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "lead-email-error" : undefined}
                  className={`${inputClass} ${errors.email ? "border-danger" : "border-line"}`}
                  {...register("email")}
                />
              </Field>

              <Field
                id="lead-phone"
                label="Phone number"
                required
                error={errors.phone?.message}
              >
                <input
                  id="lead-phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Include your country code"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "lead-phone-error" : undefined}
                  className={`${inputClass} ${errors.phone ? "border-danger" : "border-line"}`}
                  {...register("phone")}
                />
              </Field>

              <Field id="lead-experience" label="Experience level" error={errors.experience?.message}>
                <div className="relative">
                  <select
                    id="lead-experience"
                    autoComplete="off"
                    aria-invalid={Boolean(errors.experience)}
                    aria-describedby={
                      errors.experience ? "lead-experience-error" : undefined
                    }
                    className={`${inputClass} appearance-none pr-10 ${
                      errors.experience ? "border-danger" : "border-line"
                    }`}
                    {...register("experience")}
                  >
                    <option value="">Select your experience level</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted"
                    aria-hidden="true"
                  />
                </div>
              </Field>

              <Field id="lead-message" label="Message / requirement" error={errors.message?.message}>
                <textarea
                  id="lead-message"
                  rows={4}
                  placeholder="What would you like help with?"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "lead-message-error" : undefined}
                  className={`${inputClass} h-auto py-3 ${
                    errors.message ? "border-danger" : "border-line"
                  }`}
                  {...register("message")}
                />
              </Field>

              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="companyWebsite">Company website</label>
                <input
                  id="companyWebsite"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("companyWebsite")}
                />
              </div>

              {status === "error" ? (
                <p
                  ref={errorRef}
                  tabIndex={-1}
                  role="alert"
                  className="rounded-xl border border-danger/20 bg-danger/5 px-3 py-2 text-sm text-danger"
                >
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white shadow-soft hover:bg-navy-800 disabled:cursor-wait disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Get Started"}
              </button>
              <p className="text-center text-xs leading-5 text-muted">
                We use this information only to contact you about the training.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required = false,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
        {required ? (
          <>
            <span aria-hidden="true" className="text-danger">
              {" "}
              *
            </span>
            <span className="sr-only"> required</span>
          </>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
