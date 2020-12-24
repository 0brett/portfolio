// import NextLink from "next/link"

import Prose from 'components/Prose'

export type ProjectProps = {
  href: string
  icon: string
  title: string
  desc: string
}
export default function Project({ href, icon, title, desc }: ProjectProps) {
  return (
    // <NextLink href={href}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="group mt-8">
        <div className="flex items-center">
          <div className="flex items-center justify-center rounded-md text-blue-500 dark:text-blue-400 group-hover:text-gray-900 dark:group-hover:text-gray-200">
            <svg
              className="h-12 w-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
            </svg>
          </div>
          <h3 className="ml-4 text-xl font-semibold md:text-2xl group-hover:text-blue-500 dark:group-hover:text-blue-400">
            {title}
          </h3>
        </div>
        <Prose className="mt-3 group-hover:text-blue-500 dark:group-hover:text-blue-400">
          <p>{desc}</p>
        </Prose>
      </div>
    </a>
    // </NextLink>
  )
}
