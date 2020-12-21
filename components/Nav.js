import * as React from "react"
import { useTheme } from "next-themes"
import NextLink from "next/link"
import urls from "utils/sitemap"

const moon =
  "M11.9701 2.72999C12.1301 2.38999 11.8501 2.00999 11.4701 2.02999C5.47006 2.32999 1.00006 7.85999 2.19006 13.99C2.97006 18.02 6.28006 21.21 10.3301 21.86C14.4001 22.52 18.1001 20.72 20.2001 17.71C20.4101 17.4 20.2401 16.96 19.8701 16.92C13.1301 16.16 9.00006 8.95999 11.9701 2.72999Z"

const sun =
  "M6.05 5.14005L5.66 4.75005C5.27 4.36005 4.64 4.37005 4.26 4.75005L4.25 4.76005C3.86 5.15005 3.86 5.78005 4.25 6.16005L4.64 6.55005C5.03 6.94005 5.65 6.94005 6.04 6.55005L6.05 6.54005C6.44 6.16005 6.44 5.52005 6.05 5.14005V5.14005ZM3.01 11.5H1.99C1.44 11.5 1 11.94 1 12.49V12.5C1 13.05 1.44 13.49 1.99 13.49H3C3.56 13.5 4 13.06 4 12.51V12.5C4 11.94 3.56 11.5 3.01 11.5ZM12.01 1.55005H12C11.44 1.55005 11 1.99005 11 2.54005V3.50005C11 4.05005 11.44 4.49005 11.99 4.49005H12C12.56 4.50005 13 4.06005 13 3.51005V2.54005C13 1.99005 12.56 1.55005 12.01 1.55005V1.55005ZM19.75 4.76005C19.36 4.37005 18.73 4.37005 18.34 4.75005L17.95 5.14005C17.56 5.53005 17.56 6.16005 17.95 6.54005L17.96 6.55005C18.35 6.94005 18.98 6.94005 19.36 6.55005L19.75 6.16005C20.14 5.77005 20.14 5.15005 19.75 4.76005V4.76005ZM17.94 19.8601L18.33 20.25C18.72 20.64 19.35 20.64 19.74 20.25C20.13 19.86 20.13 19.23 19.74 18.84L19.35 18.4501C18.96 18.0601 18.33 18.0701 17.95 18.4501C17.55 18.8501 17.55 19.4701 17.94 19.8601ZM20 12.49V12.5C20 13.05 20.44 13.49 20.99 13.49H22C22.55 13.49 22.99 13.05 22.99 12.5V12.49C22.99 11.94 22.55 11.5 22 11.5H20.99C20.44 11.5 20 11.94 20 12.49ZM12 6.50005C8.69 6.50005 6 9.19005 6 12.5C6 15.81 8.69 18.5 12 18.5C15.31 18.5 18 15.81 18 12.5C18 9.19005 15.31 6.50005 12 6.50005ZM11.99 23.4501H12C12.55 23.4501 12.99 23.01 12.99 22.46V21.5C12.99 20.95 12.55 20.51 12 20.51H11.99C11.44 20.51 11 20.95 11 21.5V22.46C11 23.01 11.44 23.4501 11.99 23.4501ZM4.25 20.24C4.64 20.63 5.27 20.63 5.66 20.24L6.05 19.85C6.44 19.46 6.43 18.8301 6.05 18.4501L6.04 18.4401C5.65 18.0501 5.02 18.0501 4.63 18.4401L4.24 18.83C3.86 19.23 3.86 19.85 4.25 20.24Z"

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
