import * as React from "react"
import { useTheme } from "next-themes"
import NextLink from "next/link"
import urls from "utils/sitemap"

const moon =
  "M11.9701 2.72999C12.1301 2.38999 11.8501 2.00999 11.4701 2.02999C5.47006 2.32999 1.00006 7.85999 2.19006 13.99C2.97006 18.02 6.28006 21.21 10.3301 21.86C14.4001 22.52 18.1001 20.72 20.2001 17.71C20.4101 17.4 20.2401 16.96 19.8701 16.92C13.1301 16.16 9.00006 8.95999 11.9701 2.72999Z"

const sun =
  "M20.8134 15.6465L23.6778 12.7822C24.1074 12.3525 24.1074 11.6585 23.6778 11.2288L20.8134 8.35345V4.28827C20.8134 3.68235 20.3177 3.1866 19.7117 3.1866H15.6465L12.7822 0.32224C12.3525 -0.107413 11.6585 -0.107413 11.2288 0.32224L8.35345 3.1866H4.28827C3.68235 3.1866 3.1866 3.68235 3.1866 4.28827V8.35345L0.32224 11.2178C-0.107413 11.6475 -0.107413 12.3415 0.32224 12.7712L3.1866 15.6355V19.7117C3.1866 20.3177 3.68235 20.8134 4.28827 20.8134H8.35345L11.2178 23.6778C11.6475 24.1074 12.3415 24.1074 12.7712 23.6778L15.6355 20.8134H19.7117C20.3177 20.8134 20.8134 20.3177 20.8134 19.7117V15.6465ZM12 18.6101C8.35345 18.6101 5.38995 15.6465 5.38995 12C5.38995 8.35345 8.35345 5.38995 12 5.38995C15.6465 5.38995 18.6101 8.35345 18.6101 12C18.6101 15.6465 15.6465 18.6101 12 18.6101Z"

const linkText = "text-gray-700 dark:text-gray-300"

const linkBg =
  "bg-gray-100 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-600"

export default function Nav() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()
  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), [])

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
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className={`h-12 w-12 p-3 rounded-full ${linkBg}`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={linkText}
            >
              <path d={theme === "dark" ? sun : moon} />
            </svg>
          ) : null}
        </button>
      </nav>
    </div>
  )
}

function NavLink(props) {
  return (
    <NextLink href={props.href}>
      <a
        className={`py-3 px-4 mb-4 rounded sm:mb-0 sm:mr-4 w-max ${linkText} ${linkBg}`}
      >
        {props.children}
      </a>
    </NextLink>
  )
}
