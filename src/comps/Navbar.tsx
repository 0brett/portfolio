import * as React from 'react'
import NextLink from 'next/link'
import urls from 'utils/sitemap'

const buttonStyles =
  'text-gray-500 hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'

export default function Navbar() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 md:px-6 md:mt-4 lg:px-8">
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
                <path d="M10.6181 29.9688C14.8709 29.9688 19.7434 28.4197 19.7434 23.857C19.7434 21.0969 17.0678 19.9703 14.364 19.7731C17.6593 19.4915 20.9264 17.8579 20.9264 14.3937C20.9264 11.4364 18.4197 10.2535 14.7583 10.2535H4.90065V10.3098C5.54844 10.8449 5.85825 11.3237 5.85825 12.0842C5.85825 12.5067 5.77376 13.0136 5.63293 13.6614L2.394 26.5327C1.9152 28.3915 1.46456 29.0957 0 29.9124V29.9688H10.6181ZM9.35067 19.5197L11.4912 11.0139H12.8431C14.9554 11.0139 15.9412 12.1687 15.9412 14.0839C15.9412 17.2665 13.7444 19.5197 10.7026 19.5197H9.35067ZM6.95667 29.2083L9.18169 20.2238H10.8997C13.4909 20.2238 14.6738 21.294 14.6738 23.3782C14.6738 26.8706 12.2798 29.2083 8.84371 29.2083H6.95667Z" />
                <path d="M28.7905 20.6181H31.4943C33.7756 20.6181 34.4797 20.8997 34.7332 23.4909H34.7895L36.4512 16.7595H36.3949C34.874 19.3788 33.9728 19.8013 31.6914 19.8013H28.9876L31.1563 11.0139H34.1417C37.6905 11.0139 38.6763 12.6475 39.6057 15.4639H39.662L40 10C39.5494 10.1972 38.9016 10.2535 37.9158 10.2535H24.5939V10.3098C25.2699 10.8449 25.5797 11.3237 25.5797 12.0842C25.5797 12.5067 25.4952 13.0136 25.3262 13.6614L22.0873 26.5327C21.6085 28.3915 21.1578 29.0957 19.6933 29.9124V29.9688H28.6215V29.9124C27.5512 29.2928 27.0724 28.814 27.0724 27.9409C27.0724 27.5748 27.1287 27.1523 27.2696 26.6453L28.7905 20.6181Z" />
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
