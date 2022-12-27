import bcryptjs from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connect, User } from '@/lib/connectDB'

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user?._id) token._id = user._id
      if (user?.isAdmin) token.isAdmin = user.isAdmin
      return token
    },
    async session({ session, token }: any) {
      if (token?._id) session.user._id = token._id
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin
      return session
    },
  },

  secret: 'adsfadsklfhjsadfij',
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'username',
        },
      },
      async authorize(credentials: any, req) {
        await connect()
        const user = await User.findOne({
          email: credentials.email,
        })
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return user
        }
        throw new Error('Invalid email or password')
      },
    }),
  ],
})
