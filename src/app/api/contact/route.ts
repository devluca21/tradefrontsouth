import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Where advisor/rep receives the emails (e.g. advisors@tradefrontsouth.com)
const TO_EMAIL = process.env.CONTACT_EMAIL_TO || "contact@tradefrontsouth.com";
// Sender "from" - use a verified domain in Resend or onboarding@resend.dev for testing
const FROM_EMAIL = process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body as {
      name?: string;
      email?: string;
      service?: string;
      message?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email is not configured. Please set RESEND_API_KEY." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const serviceLabel =
      {
        partnership: "Partnership / holding",
        advisory: "Guidance",
        general: "General inquiry",
      }[service as string] || service || "Not specified";

    const escape = (s: string) =>
      s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    const safeName = escape(name.trim());
    const safeEmail = escape(email.trim());
    const safeMessage = message.trim().replace(/\n/g, "<br>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const subject = `Contact: ${name.trim()} – ${serviceLabel}`;
    const html = `
      <p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p>
      <p><strong>Service:</strong> ${serviceLabel}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send email." },
      { status: 500 }
    );
  }
}
