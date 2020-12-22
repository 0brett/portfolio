import NextLink from 'next/link'
import urls from 'utils/sitemap'

const linkText = 'text-gray-700 dark:text-gray-300'
const linkBg = 'bg-gray-100 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-600'

export default function Nav() {
  return (
    <div className="w-full mt-3 mb-4 sm:mb-8 sm:mt-8 md:mt-12">
      <nav className="flex justify-between max-w-2xl px-3 mx-auto sm:items-center">
        <section className="flex flex-col sm:flex-row">
          {urls.map((url, idx) => (
            <NavLink key={idx} href={url.href}>
              {url.text}
            </NavLink>
          ))}
        </section>
      </nav>
    </div>
  )
}

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <NextLink href={href}>
      <a className={`py-3 px-3.5 mb-4 rounded sm:mb-0 sm:mr-4 w-max ${linkText} ${linkBg}`}>
        {children}
      </a>
    </NextLink>
  )
}
