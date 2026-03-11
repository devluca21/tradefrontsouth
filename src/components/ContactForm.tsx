"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const serviceOptions = [
  { value: "", label: "What are you interested in?" },
  { value: "escrow", label: "Escrow services" },
  { value: "investment", label: "REIT-style investment" },
  { value: "legal", label: "Legal services" },
  { value: "sell", label: "Selling my property" },
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

  return (
    <motion.form
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className={`mx-auto space-y-5 text-left ${compact ? "max-w-md" : "mt-10 max-w-lg"}`}
    >
      {defaultService ? (
        <input type="hidden" name="service" value={defaultService} />
      ) : (
        <div>
          <label htmlFor={id("service")} className="mb-1.5 block text-sm font-medium text-navy">
            Service
          </label>
          <select
            id={id("service")}
            name="service"
            className="w-full rounded-sm border border-navy/20 bg-white px-4 py-3 text-navy focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange disabled:text-navy/60"
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
        <label htmlFor={id("name")} className="mb-1.5 block text-sm font-medium text-navy">
          Name
        </label>
        <input
          id={id("name")}
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-sm border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-navy/50 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
          placeholder="Your name"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor={id("email")} className="mb-1.5 block text-sm font-medium text-navy">
          Email
        </label>
        <input
          id={id("email")}
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-sm border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-navy/50 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
          placeholder="you@example.com"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor={id("message")} className="mb-1.5 block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id={id("message")}
          name="message"
          required
          rows={compact ? 4 : 5}
          className="w-full resize-y rounded-sm border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-navy/50 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange disabled:text-navy/60"
          placeholder="How can we help?"
          disabled={status === "sending"}
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      {status === "success" && (
        <p className="text-sm text-green-700" role="status">
          Thank you. Your message has been sent and an advisor will be in touch.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-sm bg-orange px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-orange-hover disabled:opacity-70"
      >
        {status === "sending" ? (
          <span className="inline-flex items-center justify-center gap-2">
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </span>
        ) : (
          defaultService ? "Send to advisor" : "Send message to advisor"
        )}
      </button>
    </motion.form>
  );
}
