import * as React from 'react'
import Icon from 'components/Icon'
import { MdClose, MdMenu } from 'react-icons/md'
import NextLink from 'next/link'
import sitemap from 'lib/sitemap'
import Logo from 'components/Logo'

const buttonStyles = 'nav-link font-medium'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <nav className="mb-4 sm:mb-8 md:mb-12">
      <div className="screen-container">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <button
              id="menuButton"
              className={`inline-grid place-items-center px-2.5 -ml-2 ${buttonStyles}`}
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <Icon>
                <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                {isMenuOpen ? <MdClose /> : <MdMenu />}
              </Icon>
            </button>
          </div>
          {/* desktop menu */}
          <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Logo className="h-8 w-auto text-brand-600" />
            </div>
            <div className="hidden md:block md:ml-6">
              <div className="flex space-x-4">
                {sitemap.topLevel.map((url, idx) => (
                  <NavLink key={idx} href={url.href}>
                    {url.title}
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
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-2">
          {sitemap.topLevel.map((url, idx) => (
            <NavLink menuOpen={isMenuOpen} key={idx} href={url.href}>
              {url.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

interface NavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string
  menuOpen?: boolean
}

function NavLink({ menuOpen, href, children }: NavLinkProps) {
  return (
    <NextLink href={href}>
      <a className={`px-3.5 font-medium ${buttonStyles} ${menuOpen ? 'block' : null}`}>
        {children}
      </a>
    </NextLink>
  )
}
