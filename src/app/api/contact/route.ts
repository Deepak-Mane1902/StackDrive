import { RESEND_API_KEY, RESEND_TO_EMAIL } from "@/lib/env";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = RESEND_API_KEY;
const toEmail = RESEND_TO_EMAIL;

if (!apiKey) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

if (!toEmail) {
  throw new Error("Missing RESEND_TO_EMAIL environment variable");
}

const resend = new Resend(apiKey);

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'StackDrive Contact <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New Contact Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
