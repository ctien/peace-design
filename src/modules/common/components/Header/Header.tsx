import { Button, Container } from '@/modules/ui'
import cn from 'clsx'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { Navbar } from '../Navbar'
import Logo from './Logo'

export default function Header() {
  const { data } = useSession()

  return (
    <div className={cn(['w-full transition-all z-30 lg:py-4 py-2'])}>
      <Container className="flex items-center justify-between">
        <Logo />
        <div className="lg:flex hidden">
          <Navbar />
        </div>
        {data?.user ? (
          <div className="flex items-center">
            {/* <div className="relative group">
              <button className="mr-4">{data.user.name}</button>
              <div className="absolute group-hover:visible transition duration-100 invisible top-full right-0 bg-white w-48 h-fit shadow z-20 rounded py-2">
                <button
                  className="p-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </div>
            </div> */}
            <Link href="/dashboard">
              <a className="bg-blue-600 hover:bg-blue-700 transition duration-100 px-8 text-lg py-4 font-semibold leading-none rounded-full text-white">
                Go to Dashboard
              </a>
            </Link>
          </div>
        ) : (
          <div>
            <Link href="/login">
              <a className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-white hover:bg-neutral-700 hover:text-white rounded-4xl transition duration-100 rounded-full mr-4 shadow">
                Sign In
              </a>
            </Link>
            <Link href="/register">
              <a className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-4xl transition duration-100 rounded-full">
                Register
              </a>
            </Link>
          </div>
        )}
      </Container>
    </div>
  )
}
