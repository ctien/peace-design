import { getSession } from 'next-auth/react'
import bcryptjs from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next'
import { connect, disconnect, User } from '@/lib/connectDB'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(400).send({ message: `${req.method} not supported` })
  }

  const session = await getSession({ req })
  if (!session) {
    return res.status(401).send({ message: 'signin required' })
  }

  const { user } = session
  const { name, email, password } = req.body

  if (
    !name ||
    !email ||
    !email.includes('@') ||
    (password && password.trim().length < 5)
  ) {
    res.status(422).json({
      message: 'Validation error',
    })
    return
  }

  await connect()
  const toUpdateUser = await User.findOne({ email: user?.email })
  toUpdateUser.name = name
  toUpdateUser.email = email

  if (password) {
    toUpdateUser.password = bcryptjs.hashSync(password)
  }

  await toUpdateUser.save()
  await disconnect()
  res.send({
    message: 'User updated',
  })
}

export default handler
