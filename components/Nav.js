import * as React from "react"
import { useTheme } from "next-themes"
import NextLink from "next/link"
import urls from "utils/sitemap"

const moon =
  "M11.9701 2.72999C12.1301 2.38999 11.8501 2.00999 11.4701 2.02999C5.47006 2.32999 1.00006 7.85999 2.19006 13.99C2.97006 18.02 6.28006 21.21 10.3301 21.86C14.4001 22.52 18.1001 20.72 20.2001 17.71C20.4101 17.4 20.2401 16.96 19.8701 16.92C13.1301 16.16 9.00006 8.95999 11.9701 2.72999Z"

const sun =
  "M6.05 4.64005L5.66 4.25005C5.27 3.86005 4.64 3.87005 4.26 4.25005L4.25 4.26005C3.86 4.65005 3.86 5.28005 4.25 5.66005L4.64 6.05005C5.03 6.44005 5.65 6.44005 6.04 6.05005L6.05 6.04005C6.44 5.66005 6.44 5.02005 6.05 4.64005V4.64005ZM3.01 11H1.99C1.44 11 1 11.44 1 11.99V12C1 12.55 1.44 12.99 1.99 12.99H3C3.56 13 4 12.56 4 12.01V12C4 11.44 3.56 11 3.01 11ZM12.01 1.05005H12C11.44 1.05005 11 1.49005 11 2.04005V3.00005C11 3.55005 11.44 3.99005 11.99 3.99005H12C12.56 4.00005 13 3.56005 13 3.01005V2.04005C13 1.49005 12.56 1.05005 12.01 1.05005V1.05005ZM19.75 4.26005C19.36 3.87005 18.73 3.87005 18.34 4.25005L17.95 4.64005C17.56 5.03005 17.56 5.66005 17.95 6.04005L17.96 6.05005C18.35 6.44005 18.98 6.44005 19.36 6.05005L19.75 5.66005C20.14 5.27005 20.14 4.65005 19.75 4.26005V4.26005ZM17.94 19.3601L18.33 19.75C18.72 20.14 19.35 20.14 19.74 19.75C20.13 19.36 20.13 18.73 19.74 18.34L19.35 17.9501C18.96 17.5601 18.33 17.5701 17.95 17.9501C17.55 18.3501 17.55 18.9701 17.94 19.3601ZM20 11.99V12C20 12.55 20.44 12.99 20.99 12.99H22C22.55 12.99 22.99 12.55 22.99 12V11.99C22.99 11.44 22.55 11 22 11H20.99C20.44 11 20 11.44 20 11.99ZM12 6.00005C8.69 6.00005 6 8.69005 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69005 15.31 6.00005 12 6.00005ZM11.99 22.9501H12C12.55 22.9501 12.99 22.51 12.99 21.96V21C12.99 20.45 12.55 20.01 12 20.01H11.99C11.44 20.01 11 20.45 11 21V21.96C11 22.51 11.44 22.9501 11.99 22.9501ZM4.25 19.74C4.64 20.13 5.27 20.13 5.66 19.74L6.05 19.35C6.44 18.96 6.43 18.3301 6.05 17.9501L6.04 17.9401C5.65 17.5501 5.02 17.5501 4.63 17.9401L4.24 18.33C3.86 18.73 3.86 19.35 4.25 19.74Z"

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
