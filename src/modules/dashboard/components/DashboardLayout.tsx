import { FCProps } from '@/modules/common'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function DashboardLayout({ children }: FCProps) {
  const { data } = useSession()
  const router = useRouter()
  useEffect(() => {
    !data?.user && router.push('/login')
  }, [data?.user, router])

  if (data?.user) {
    return (
      <div className="grid grid-cols-6">
        <div className="flex flex-col w-full h-screen bg-gray-900">
          <Link href="/">
            <a className="text-white h-20 text-3xl font-semibold flex items-center justify-center">
              <span className="text-blue-500">Astra</span>
              <span className="text-amber-500">Crypto</span>
            </a>
          </Link>
          <div className="flex-grow">
            <Link href="/dashboard/sellastra">
              <a className="text-white p-4 text-left hover:bg-gray-800 block hover:text-gray-200">
                Sell Astra
              </a>
            </Link>
          </div>
          <button
            onClick={() => signOut()}
            className="text-white p-4 border-t border-gray-500 text-left"
          >
            Sign out
          </button>
        </div>
        <main className="col-span-5">{children}</main>
      </div>
    )
  }
  return null
}
