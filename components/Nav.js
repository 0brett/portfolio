import * as React from "react"
import { useTheme } from "next-themes"
import NextLink from "next/link"
import urls from "utils/sitemap"

export default function Nav() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()
  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), [])

  return (
    <div className="w-full mt-2 mb-4 sm:mb-8 sm:mt-8 md:mt-12">
      <nav className="flex justify-between max-w-2xl px-2 mx-auto sm:items-center">
        <section className="flex flex-col sm:flex-row">
          {urls.map((url, idx) => (
            <NavLink key={idx} href={url.href}>
              {url.text}
            </NavLink>
          ))}
        </section>
        {mounted ? (
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="h-10 px-2 py-1 font-semibold font-mono text-gray-700 border-2 border-gray-500 rounded-sm dark:text-gray-300 dark:border-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600 sm:h-auto"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            GO {theme === "dark" ? "LIGHT" : "DARK"}
          </button>
        ) : null}
      </nav>
    </div>
  )
}

function NavLink(props) {
  return (
    <NextLink href={props.href}>
      <a className="h-10 sm:h-auto px-2 py-1.5 mb-4 border-2 border-gray-100 dark:border-gray-800 text-gray-900 rounded-sm sm:mb-0 sm:mr-4 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:border-gray-300 hover:bg-gray-300 w-max">
        {props.children}
      </a>
    </NextLink>
  )
}
