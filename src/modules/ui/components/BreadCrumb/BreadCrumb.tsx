import Link from 'next/link'
import { useRouter } from 'next/router'

const getLink = (asPath: string, item: string) => {
  const indexStr = asPath.indexOf(item)
  return asPath.slice(0, indexStr + item.length) || '/'
}

export default function BreadCrum() {
  const router = useRouter()
  const paths = router.asPath.split('/')
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {paths.map((item, i) => {
          return (
            <p key={i} className="flex items-center capitalize">
              {paths.length - 1 === i ? (
                <Link href={getLink(router.asPath, item)}>
                  <a className="inline-flex items-center text-sm text-gray-400 hover:text-gray-500">
                    {item === '' ? 'home' : item}
                  </a>
                </Link>
              ) : (
                <>
                  <Link href={getLink(router.asPath, item)}>
                    <a className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900">
                      {item === '' ? 'home' : item}
                    </a>
                  </Link>
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </>
              )}
              {/* <Link href={getLink(router.asPath, item)}>
                <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  {item === '' ? 'home' : item}
                </a>
              </Link> */}
              {/* {i < paths.length - 1 && (
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )} */}
            </p>
          )
        })}
        {/* <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <a
              href="#"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
            >
              Product
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              Shrimp
            </span>
          </div>
        </li> */}
      </ol>
    </nav>
  )
}
