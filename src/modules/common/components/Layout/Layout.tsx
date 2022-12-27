import { FCProps } from '../../types'
import { Footer } from '../Footer'
import { Header } from '../Header'

export default function Layout({ children }: FCProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
