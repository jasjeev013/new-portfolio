import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { FormData } from "./types";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // 1. Verify reCAPTCHA token first
  try {
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${body.recaptchaToken}`,
      { method: 'POST' }
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { 
          success: false, 
          message: "CAPTCHA verification failed. Please try again." 
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Error verifying CAPTCHA. Please try again later." 
      },
      { status: 500 }
    );
  }

  // 2. Validate form data
  const formData: FormData = {
    firstName: body.firstName?.trim(),
    lastName: body.lastName?.trim(),
    email: body.email?.trim(),
    message: body.message?.trim(),
  };

  if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }

  // 3. Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  
  // 4. Send email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "jasjeev74@gmail.com",
    subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
    text: `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Message: ${formData.message}
    `,
    // Optional HTML version
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to send message. Please try again later." 
      },
      { status: 500 }
    );
  }
}