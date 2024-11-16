// src/api/sendEmail.js
import nodemailer from 'nodemailer';



export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Configure the nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Or use another email service like Yahoo, Outlook, etc.
    auth: {
    //   user: process.env.EMAIL_USER, // Your email address (set in environment variable)
    //   pass: process.env.EMAIL_PASS, // Your email password or app-specific password
       user: "alexahmed231@gmail.com", // Your email address (set in environment variable)
       pass: "shujanislammale786", // Your email password or app-specific password
    },
  });

  try {
    await transporter.sendMail({
      from: 'alexahmed231@gmail.com', // Your email address
      to: 'begaslam90@gmail.com', // The email address to send to
      subject: 'New Email Submission',
      text: `You have a new email submission from: ${email}`,
      html: `<p>You have a new email submission from: <strong>${email}</strong></p>`,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
