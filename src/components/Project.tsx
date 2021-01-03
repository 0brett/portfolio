import { FaGithubAlt } from 'react-icons/fa'
import Link from 'components/Link'
import Icon from 'components/Icon'
import Prose from 'components/Prose'

export type ProjectProps = {
  href: string
  title?: string
  desc?: string
  icon?: React.ReactNode
  icontitle: string
  children?: React.ReactNode
}

export default function Project({ href, title, desc, icon, icontitle }: ProjectProps) {
  return (
    <>
      <div className="mt-6 sm:mt-8">
        <div className="flex items-center">
          <Icon
            h="h-12"
            w="w-12"
            className="p-2.5 grid place-items-center rounded-md text-white bg-brand-600"
          >
            <span className="sr-only">{icontitle}</span>
            {icon}
          </Icon>
          <h3 className="ml-4 type2">{title}</h3>
        </div>
        <Prose className="mt-3">
          <p>{desc}</p>
        </Prose>
        <Link
          href={href}
          className="inline-flex items-center rounded-md py-2.5 px-3 mt-3 type5 text-gray-700 bg-brand-100 font-medium hover:bg-brand-600 hover:text-white"
        >
          <Icon h="h-4 sm:h-5" w="w-4 sm:w-5" className="mt-0.5 mr-1.5 sm:mr-2">
            <span className="sr-only">Navigate to GitHub repository</span>
            <FaGithubAlt />
          </Icon>
          View code
        </Link>
      </div>
    </>
  )
}
