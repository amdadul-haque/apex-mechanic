import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { formData } = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      shopName,
      appointmentSystem,
      customSoftware,
      howDidYouHear,
      comments
    } = formData;

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
      subject: `New Form Submission from ${shopName}`,
      html: `
          <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
            <h2 style="color: #333;">New Form Submission</h2>
            <table style="border-collapse: collapse; font-size: 16px; width: auto; margin: 0; border: 1px solid #ddd;">
              <tr>
                <th style="padding: 10px; text-align: left; border: 1px solid #ddd; background-color: #f2f2f2;">First name</th>
                <td style="padding: 10px; border: 1px solid #ddd;">${firstName}</td>
              </tr>
              <tr>
                <th style="padding: 10px; text-align: left; border: 1px solid #ddd; background-color: #f2f2f2;">Last name</th>
                <td style="padding: 10px; border: 1px solid #ddd;">${lastName}</td>
              </tr>
              <tr>
                <th style="padding: 10px; text-align: left; border: 1px solid #ddd; background-color: #f2f2f2;">Email</th>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  <a href="mailto:${email}" style="color: #333;">${email}</a>
                </td>
              </tr>
              <tr>
                <th style="padding: 10px; text-align: left; border: 1px solid #ddd; background-color: #f2f2f2;">Phone</th>
                <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <th style="padding: 10px; text-align: left; border: 1px solid #ddd; background-color: #f2f2f2;">Shop name</th>
                <td style="padding: 10px; border: 1px solid #ddd;">${shopName}</td>
              </tr>
              <tr>
                <th style="padding: 10px; text-align: left; border: 1px solid #ddd; background-color: #f2f2f2;">Appointment system</th>
                <td style="padding: 10px; border: 1px solid #ddd;">${appointmentSystem}</td>
              </tr>
              <tr>
                <th style="padding: 10px; text-align: left; border: 1px solid #ddd; background-color: #f2f2f2;">Custom software</th>
                <td style="padding: 10px; border: 1px solid #ddd;">${customSoftware}</td>
              </tr>
              <tr>
                <th style="padding: 10px; text-align: left; border: 1px solid #ddd; background-color: #f2f2f2;">How did you hear</th>
                <td style="padding: 10px; border: 1px solid #ddd;">${howDidYouHear}</td>
              </tr>
              <tr>
                <th style="padding: 10px; text-align: left; border: 1px solid #ddd; background-color: #f2f2f2;">Comments</th>
                <td style="padding: 10px; border: 1px solid #ddd;">${comments}</td>
              </tr>
            </table>
          </div>
          `,
    };

    await transporter.sendMail(mailOption)
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}