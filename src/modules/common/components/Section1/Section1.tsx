import { Section1Img } from '@/assets/images'
import { Container } from '@/modules/ui'
import Image from 'next/image'

export default function Section1() {
  return (
    <Container className="pt-24 pb-32">
      <div className="w-1/2 mx-auto text-center mb-32">
        <h3 className="lg:text-7xl text-6xl font-bold mb-4 lg:leading-36">
          Build{' '}
          <span
            className="bg-blue-600 text-white px-8"
            style={{
              borderRadius: '91% 9% 90% 10% / 29% 82% 18% 71%',
            }}
          >
            stunning
          </span>{' '}
          layouts quickly
        </h3>
        <p className="my-8 text-xl text-gray-700 font-light">
          Speed up your workflow in a few simple steps.
        </p>
      </div>

      <div>
        <div className="grid grid-cols-2 mb-32">
          <div className="flex items-center pr-16">
            <div>
              <p className="font-bold">Step 1 of 4</p>
              <h3 className="text-5xl my-4 font-bold">
                Select your favorite front-end technology
              </h3>
              <p className="my-8 text-lg text-gray-700 font-light">
                {`Imagine your colleagues' faces when they see the ease with which you
          work using different front-end technologies.`}
              </p>
              <ul>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Material-UI (React)</li>
                <li>Bulma</li>
              </ul>
            </div>
          </div>

          <div className="h-[500px] relative">
            <div
              className="w-48 h-48 absolute -top-16 -left-16 bg-teal-400 -z-10"
              style={{ borderRadius: '30% 10% 0% 10% ' }}
            />
            <div
              className="w-96 absolute -right-16 bg-blue-50 -z-10 -translate-y-1/2 top-1/2"
              style={{
                borderRadius: '10% 10% 10% 10% ',
                height: '130%',
              }}
            />
            <div
              className="w-48 h-48 absolute -top-16 -left-16 bg-teal-400 -z-10"
              style={{ borderRadius: '30% 10% 0% 10% ' }}
            />
            <div className="w-full h-full relative rounded-xl overflow-hidden">
              <Image src={Section1Img} layout="fill" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-24 mb-32">
          <div className="flex items-center order-last">
            <div>
              <p className="font-bold">Step 2 of 4</p>
              <h3 className="text-5xl my-4 font-bold">
                Select your favorite front-end technology
              </h3>
              <p className="my-8 text-lg text-gray-700 font-light">
                {`Imagine your colleagues' faces when they see the ease with which you
          work using different front-end technologies.`}
              </p>
              <ul>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Material-UI (React)</li>
                <li>Bulma</li>
              </ul>
            </div>
          </div>
          <div className="h-[500px]">
            <div className="w-full h-full relative">
              <Image src={Section1Img} layout="intrinsic" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-24 mb-32">
          <div className="flex items-center">
            <div>
              <p className="font-bold">Step 3 of 4</p>
              <h3 className="text-5xl my-4 font-bold">
                Select your favorite front-end technology
              </h3>
              <p className="my-8 text-lg text-gray-700 font-light">
                {`Imagine your colleagues' faces when they see the ease with which you
          work using different front-end technologies.`}
              </p>
              <ul>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Material-UI (React)</li>
                <li>Bulma</li>
              </ul>
            </div>
          </div>
          <div className="h-[500px]">
            <div className="w-full h-full relative">
              <Image src={Section1Img} layout="intrinsic" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-24">
          <div className="flex items-center order-last">
            <div>
              <p className="font-bold">Step 4 of 4</p>
              <h3 className="text-5xl my-4 font-bold">
                Select your favorite front-end technology
              </h3>
              <p className="my-8 text-lg text-gray-700 font-light">
                {`Imagine your colleagues' faces when they see the ease with which you
          work using different front-end technologies.`}
              </p>
              <ul>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Material-UI (React)</li>
                <li>Bulma</li>
              </ul>
            </div>
          </div>
          <div className="h-[500px]">
            <div className="w-full h-full relative">
              <Image src={Section1Img} layout="intrinsic" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
