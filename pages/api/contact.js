import nodemailer from 'nodemailer'

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
    from: `KrittIt Blog Contact <cstelum8aegis@outlook.com>`,
    replyTo: email,
    to: 'cstelum8aegis@outlook.com',
    subject: 'KrittIt Blog Contact Form',
    text: `${name}\n${email}\n${message}`,
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: '587',
    auth: { user: 'cstelum8aegis@outlook.com', pass: 'Inan3kr!ttId!0m5R4Ink' },
    secureConnection: true,
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
