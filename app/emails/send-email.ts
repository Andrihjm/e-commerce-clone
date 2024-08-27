import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  to: string,
  subject: string,
  tamplate: React.ReactNode
) {
  const { data, error } = await resend.emails.send({
    from: "P3GpI@example.com",
    to,
    subject,
    react: tamplate,
  });

  if (error) {
    throw error;
  }

  return data;
}
