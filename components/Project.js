// import NextLink from "next/link"

export default function Project(props) {
  return (
    // <NextLink href={props.href}>
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <div className="group mt-8">
        <div className="flex items-center">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white group-hover:bg-blue-100 group-hover:text-blue-500">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={props.icon}
              />
            </svg>
          </div>
          <h3 className="ml-4 text-xl font-semibold md:text-2xl group-hover:text-blue-500">
            {props.title}
          </h3>
        </div>
        <p className="mt-3 text-lg leading-8 text-gray-700 dark:text-gray-100">
          {props.desc}
        </p>
      </div>
    </a>
    // </NextLink>
  )
}
