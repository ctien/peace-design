import { Service1Img, Service2Img, Service3Img } from '@/assets/images'
import { Container } from '@/modules/ui'
import Image from 'next/image'
import Link from 'next/link'

const SERVICES = [
  {
    label: 'Landing',
    image: Service1Img,
  },
  {
    label: 'Dashboard',
    image: Service2Img,
  },
  {
    label: 'E-Commerce',
    image: Service3Img,
  },
]

export default function ServicesSection() {
  return (
    <div className="bg-white">
      <Container className="lg:px-12 pb-16">
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-2">
            What do you want to build?
          </h3>
          <p className="text-gray-600 font-light text-lg">
            Easily create landing pages, dashboards, and e-commerce templates.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map(({ label, image }, i) => (
            <div
              key={i}
              className="h-72 rounded-2xl shadow-xl overflow-hidden flex flex-col"
            >
              <div className="w-full h-full relative">
                <Image src={image} layout="fill" />
              </div>
              <Link href="">
                <a className="text-center py-4 font-medium hover:text-blue-700">
                  {label}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
