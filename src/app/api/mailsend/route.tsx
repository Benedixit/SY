import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, subject, message, website } = await request.json();


  if (website && website.trim() !== '') {
    console.warn('Spam detected: honeypot triggered.');
    return NextResponse.json({ success: true });
}

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 2525,
    auth: {
      user: process.env.MAILERSEND_SMTP_USER,
      pass: process.env.MAILERSEND_SMTP_PASS,
    },
  });



  try {
    await transporter.sendMail({
      from: '"Sabiyou" <hello@sabiyou.com>',
      to: 'sabiyou2025@proton.me',
      subject: 'New Contact Form Message',
      html: `<p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'Email failed to send' }, { status: 500 });
  }
}
