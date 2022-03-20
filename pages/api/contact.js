import nodemailer from 'nodemailer'
import { contactFormOn, metaData } from '../../global/site-settings-and-info'

if (!contactFormOn) {
  return
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.json({ message: 'not here' })
    return
  }

  const { name } = req.body
  const { email } = req.body
  const { message } = req.body

  if (!name || !email.includes('@') || !message || message.length > 250) {
    res.status(422).json({ message: 'not valid' })
    return
  }

  const mail = {
    from: `${metaData.title} Contact <${process.env.FROM_EMAIL_ADDRESS}>`,
    replyTo: email,
    to: process.env.TO_EMAIL_ADDRESS,
    subject: `${metaData.title} Contact Form Submission`,
    text: `${name}\n${email}\n${message}`,
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_ADDRESS,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    secureConnection: process.env.EMAIL_SECURE,
    tls: { ciphers: 'SSLv3' },
  })

  try {
    await transporter.sendMail(mail)
    res.status(201).json({ message: 'success' })
  } catch (e) {
    res.status(500).json({ message: 'fail' })
  }
}

export default handler
