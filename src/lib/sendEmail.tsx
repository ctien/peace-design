// import { NextApiRequest, NextApiResponse } from 'next'
// import nodemailer from 'nodemailer'

// const email = process.env.EMAIL
// const pass = process.env.EMAIL_PASS

// export const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: email,
//     pass,
//   },
// })

// export default async function (req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const data = req.body
//     if (!data || !data.name || !data.email || !data.subject || !data.message) {
//       return res.status(400).send({ message: 'Bad request' })
//     }

//     try {
//       await transporter.sendMail({
//         from: email,
//         to: data.email,
//         text: 'stringData',
//         html: '<p>hello</p>',
//         subject: data.subject,
//       })

//       return res.status(200).json({ success: true })
//     } catch (err: any) {
//       console.log(err)
//       return res.status(400).json({ message: err.message })
//     }
//   }
//   return res.status(400).json({ message: 'Bad request' })
// }

export const a = 'a'
