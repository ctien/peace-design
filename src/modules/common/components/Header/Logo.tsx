import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <span className="text-xl font-bold text-blue-600">Astra</span>
        <span className="text-xl font-medium">Crypto</span>
      </a>
    </Link>
  )
}
