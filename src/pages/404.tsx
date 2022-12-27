import { Layout } from '@/modules/common'
import { Container } from '@/modules/ui'
import Link from 'next/link'

export default function PageNotFound() {
  return (
    <Container className="py-16">
      <div className="text-center">
        <h1 className="my-16 text-6xl">Page Not Found</h1>
        <Link href="/">
          <a className="bg-blue-500 p-4 text-white hover:bg-blue-600 transition-colors rounded">
            Back to Home
          </a>
        </Link>
      </div>
    </Container>
  )
}

PageNotFound.Layout = Layout
