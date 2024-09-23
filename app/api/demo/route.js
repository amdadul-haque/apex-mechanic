import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { email } = await request.json();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    })

    const mailOption = {
      from: email,
      to: "amdad.zatiq@gmail.com",
      subject: `New Form Submission from ${email}`,
      html: `
          <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
            <h2 style="color: #333;">New Form Submission</h2>
            <table style="border-collapse: collapse; font-size: 16px; width: auto; margin: 0; border: 1px solid #ddd;">
              <tr>
                <th style="padding: 10px; text-align: left; border: 1px solid #ddd; background-color: #f2f2f2;">Email</th>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  <a href="mailto:${email}" style="color: #333;">${email}</a>
                </td>
              </tr>
          </div>
      `,
    };

    await transporter.sendMail(mailOption)
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}