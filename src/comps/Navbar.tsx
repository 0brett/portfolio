import * as React from 'react'
import NextLink from 'next/link'
import urls from 'utils/sitemap'

const buttonStyles =
  'text-gray-500 hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'

export default function Navbar() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 mb-4 sm:mb-8 md:px-6 md:mt-4 md:mb-12 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <button
              id="menuButton"
              className={`inline-flex items-center justify-center p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${buttonStyles}`}
              aria-expanded={isExpanded ? 'true' : 'false'}
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isExpanded ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
          {/* desktop menu */}
          <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <span className="sr-only">BF logo</span>
              <svg
                className="h-8 w-auto text-gray-800 dark:text-gray-100"
                viewBox="0 0 40 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.7847 32.375V32.2009C10.9391 31.4348 10.1338 31.2259 10.1338 30.1813C10.1338 29.9375 10.1673 29.6938 10.2345 29.3455L15.402 8H5.70445V8.17411C7.65068 9.04464 8.45601 9.25357 8.45601 10.2286C8.45601 10.4723 8.42246 10.7161 8.35534 11.0643L3.92601 29.3455C3.52334 31.1214 2.78511 31.1911 0 32.2009V32.375H12.7847Z" />
                <path d="M26.7186 32.375C31.7855 32.375 37.5907 30.4598 37.5907 24.8188C37.5907 21.4063 34.4029 20.0134 31.1815 19.7696C35.1075 19.4214 39 17.4018 39 13.1187C39 9.4625 36.0136 8 31.6513 8H19.9069V8.06964C20.6786 8.73125 21.0478 9.32321 21.0478 10.2634C21.0478 10.7857 20.9471 11.4125 20.7793 12.2134L16.9204 28.1268C16.35 30.425 15.8131 31.2955 14.0682 32.3054V32.375H26.7186ZM25.2086 19.4563L27.7589 8.94018H29.3695C31.8862 8.94018 33.0607 10.3679 33.0607 12.7357C33.0607 16.6705 30.4433 19.4563 26.8193 19.4563H25.2086ZM22.3564 31.4348L25.0073 20.3268H27.0542C30.1413 20.3268 31.5507 21.65 31.5507 24.2268C31.5507 28.5446 28.6984 31.4348 24.6046 31.4348H22.3564Z" />
              </svg>
            </div>
            <div className="hidden md:block md:ml-6">
              <div className="flex space-x-4">
                {urls.map((url, idx) => (
                  <NavLink key={idx} href={url.href}>
                    {url.text}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
        Mobile menu, toggle classes based on menu state.
        Menu open: "block", Menu closed: "hidden"
      */}
      <div className={`${isExpanded ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 xs:grid xs:grid-cols-2">
          {urls.map((url, idx) => (
            <NavLink menuOpen={isExpanded} key={idx} href={url.href}>
              {url.text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

type NavLinkProps = {
  menuOpen?: boolean
  href: string
  children: React.ReactNode
}

function NavLink({ menuOpen, href, children }: NavLinkProps) {
  return (
    <NextLink href={href}>
      <a
        className={`px-3.5 py-3 rounded-md text-base font-medium ${buttonStyles} ${
          menuOpen ? 'block w-min' : null
        }`}
      >
        {children}
      </a>
    </NextLink>
  )
}
