export default function Hero() {
  return (
    <>
      <div className="rounded-full w-18 h-18 bg-violet-100 absolute left-32 top-96"></div>
      <div className="rounded-full w-8 h-8 bg-yellow-100 absolute left-64 top-64"></div>
      <div className="hidden lg:block rounded-full w-16 h-16 bg-emerald-200 absolute right-32 lg:top-[500px] top-[700px]"></div>
      <div className="rounded-full w-16 h-16 bg-violet-100 absolute left-32 top-96"></div>
      <div className="rounded-full w-6 h-6 bg-red-100 absolute right-[400px] top-[600px]"></div>
      <div className="rounded-full w-24 h-24 bg-pink-200 absolute left-32 top-32"></div>
      <div className="pt-24 pb-56 relative z-10">
        <div className="mx-auto text-center max-w-3xl">
          <h1 className="lg:text-7xl text-6xl font-bold mb-4 lg:leading-36">
            Create{' '}
            <span className="border-blue-700 border-4 inline-block px-6 py-2 bg-red-400 text-white">
              beautiful
            </span>{' '}
            templates in minutes
          </h1>
          <p className="my-8 text-xl text-gray-700 font-light">
            {`Shuffle gives you 6,900+ fully responsive UI components to get you
            started. You don't have to be a designer to create attractive
            templates!`}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 transition duration-100 px-8 text-lg py-4 font-semibold leading-none rounded-full text-white">
            Try Demo
          </button>
          <button className="ml-4 bg-white hover:bg-neutral-700 hover:text-white transition duration-300 px-8 text-lg py-4 font-semibold leading-none rounded-full shadow">
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}
