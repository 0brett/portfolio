// import NextLink from "next/link"
import { Url } from 'my-types'
import { IconContext } from 'react-icons'
import Prose from 'components/Prose'

export type ProjectProps = Url & { icon: React.ReactNode }

export default function Project({ href, title, desc, icon }: ProjectProps) {
  return (
    // <NextLink href={href}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="group mt-8">
        <div className="flex items-center">
          <IconContext.Provider
            value={{
              size: '100%',
              className:
                'h-12 w-12 flex items-center justify-center rounded-md text-blue-500 dark:text-blue-400 group-hover:text-gray-900 dark:group-hover:text-gray-200'
            }}
          >
            {icon}
          </IconContext.Provider>
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
