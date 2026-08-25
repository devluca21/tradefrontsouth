"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const serviceOptions = [
  { value: "", label: "What brings you here?" },
  { value: "partnership", label: "Partnership / holding" },
  { value: "advisory", label: "Guidance" },
  { value: "general", label: "General inquiry" },
];

type ContactFormProps = {
  defaultService?: string;
  formId?: string;
  compact?: boolean;
};

export default function ContactForm({ defaultService, formId = "contact", compact }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const id = (name: string) => `${formId}-${name}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      service: (formData.get("service") as string) || defaultService || "",
      message: formData.get("message") as string,
    };

    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in name, email, and message.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Could not send. Please try again or email us directly.");
    }
  }

  const field =
    "w-full border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-60";

  return (
    <motion.form
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className={`space-y-5 text-left ${compact ? "max-w-md" : "w-full max-w-lg lg:max-w-none lg:justify-self-end"}`}
    >
      {defaultService ? (
        <input type="hidden" name="service" value={defaultService} />
      ) : (
        <div>
          <label htmlFor={id("service")} className="mb-1.5 block text-sm font-medium text-ink">
            Interest
          </label>
          <select
            id={id("service")}
            name="service"
            className={field}
            disabled={status === "sending"}
          >
            {serviceOptions.map((opt) => (
              <option key={opt.value || "default"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label htmlFor={id("name")} className="mb-1.5 block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id={id("name")}
          name="name"
          type="text"
          required
          autoComplete="name"
          className={field}
          placeholder="Your name"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor={id("email")} className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id={id("email")}
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
          placeholder="you@company.com"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor={id("message")} className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id={id("message")}
          name="message"
          required
          rows={compact ? 4 : 5}
          className={`${field} resize-y`}
          placeholder="Tell us briefly about your company or need."
          disabled={status === "sending"}
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      {status === "success" && (
        <p className="text-sm text-accent" role="status">
          Thank you. Your message has been sent—we will be in touch.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-ink-soft disabled:opacity-70"
      >
        {status === "sending" ? (
          <span className="inline-flex items-center justify-center gap-2">
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </span>
        ) : (
          "Send message"
        )}
      </button>
    </motion.form>
  );
}
