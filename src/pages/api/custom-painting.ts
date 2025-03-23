import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true", // more reliable than Boolean()
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, size, style, description, budget, timeline } = req.body;

  // Basic server-side validation
  if (
    !name ||
    !email ||
    !size ||
    !style ||
    !description ||
    !budget ||
    !timeline
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Email to you (admin)
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "New Custom Painting Request",
      text: `
        New Custom Painting Request

        Name: ${name}
        Email: ${email}
        Size: ${size}
        Style: ${style}
        Budget: ${budget}
        Timeline: ${timeline}
        Description: ${description}
      `,
      html: `
        <h2>New Custom Painting Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Size:</strong> ${size}</p>
        <p><strong>Style:</strong> ${style}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Description:</strong><br/>${description}</p>
      `,
    });

    // Confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Custom Painting Request Received",
      text: `
        Hi ${name},

        Thank you for submitting your custom painting request! We’ve received your details and will reach out within 48 hours to discuss further.

        Your request:
        - Size: ${size}
        - Style: ${style}
        - Budget: ${budget}
        - Timeline: ${timeline}

        We'll be in touch soon!

        – Virginia's Art Studio
      `,
      html: `
        <h2>Thank you for your custom painting request!</h2>
        <p>Dear ${name},</p>
        <p>We have received your request and will contact you within 48 hours to discuss the details.</p>
        <p><strong>Your request details:</strong></p>
        <ul>
          <li><strong>Size:</strong> ${size}</li>
          <li><strong>Style:</strong> ${style}</li>
          <li><strong>Budget Range:</strong> ${budget}</li>
          <li><strong>Timeline:</strong> ${timeline}</li>
        </ul>
        <p>Best regards,<br/>Virginia's Art Studio</p>
      `,
    });

    return res.status(200).json({ message: "Request submitted successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
