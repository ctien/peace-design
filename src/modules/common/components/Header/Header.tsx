import { Container } from '@/modules/ui'
import cn from 'clsx'
import { Navbar } from '../Navbar'
import Logo from './Logo'

export default function Header() {
  return (
    <div className={cn(['w-full transition-all z-30 lg:py-4 py-2'])}>
      <Container className="flex items-center justify-between">
        <Logo />
        <div className="lg:flex hidden">
          <Navbar />
        </div>

        <div>
          <button className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-white hover:bg-neutral-700 hover:text-white rounded-4xl transition duration-100 rounded-full mr-4 shadow">
            Sign In
          </button>
          <button className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-4xl transition duration-100 rounded-full">
            Register
          </button>
        </div>
      </Container>
    </div>
  )
}
