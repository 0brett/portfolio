import * as React from "react"
import { useTheme } from "next-themes"
import NextLink from "next/link"

export default function Nav() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()
  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), [])

  return (
    <div className="w-full mt-2 mb-4 xs:mt-4 xs:mb-8 sm:mt-8 md:mt-12">
      <nav className="flex justify-between max-w-2xl px-2 mx-auto xs:items-center">
        <section className="flex flex-col xs:flex-row">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/days-of-code">100 Days Of Code</NavLink>
        </section>
        {mounted ? (
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="h-8 px-2 py-1 text-gray-700 bg-gray-300 rounded-sm xs:h-auto hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-200"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        ) : null}
      </nav>
    </div>
  )
}

function NavLink(props) {
  return (
    <NextLink href={props.href}>
      <a className="px-2 py-1 mb-2 text-gray-900 rounded-sm xs:mb-0 xs:mr-4 dark:text-gray-100 dark:hover:bg-gray-700 hover:bg-gray-300 w-max">
        {props.children}
      </a>
    </NextLink>
  )
}
