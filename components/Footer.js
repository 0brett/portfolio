import NextLink from "next/link"
import urls from "utils/sitemap"

const currentYear = new Intl.DateTimeFormat("en-US", {
  year: "numeric"
}).format(new Date())

export default function Footer() {
  return (
    <div className="w-full py-8 mt-8 bg-gray-100 dark:bg-gray-800 sm:pt-16 sm:mt-16">
      <footer className="grid max-w-2xl px-3 mx-auto sm:grid-cols-footer">
        <section className="flex flex-col justify-between mb-8 sm:mb-0 sm:pb-1.5">
          <div>
            <h3 className="mb-2 text-xl font-black">Brett Flora</h3>
            <p>Thanks for stopping by.</p>
          </div>
          <p className="hidden mt-4 text-sm text-gray-600 dark:text-gray-300 sm:mt-0 sm:block">
            © 2011–{currentYear} Brett Flora. All rights reserved.
          </p>
        </section>
        <section className="grid grid-cols-subfooter gap-x-4 sm:mt-1.5">
          <div>
            <FooterHeading>SITEMAP</FooterHeading>
            {urls.map((url, idx) => (
              <FooterNextLink key={idx} href={url.href}>
                {url.text}
              </FooterNextLink>
            ))}
          </div>
          <div>
            <FooterHeading>LINKS</FooterHeading>
            <FooterLink href="https://github.com/brettflora">GitHub</FooterLink>
            <FooterLink href="https://twitter.com/brettflora_">
              Twitter
            </FooterLink>
            <FooterLink href="https://linkedin.com/in/1brett">
              LinkedIn
            </FooterLink>
          </div>
        </section>
        <p className="mt-4 text-sm text-gray-600 sm:hidden dark:text-gray-300">
          © 2011–{currentYear} Brett Flora. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

function FooterHeading(props) {
  return (
    <h4 className="text-sm font-black text-gray-600 dark:text-gray-300">
      {props.children}
    </h4>
  )
}

function FooterNextLink(props) {
  return (
    <NextLink href={props.href}>
      <a className="block py-1 text-gray-900 xs:mb-0 xs:mr-4 dark:text-gray-100 hover:underline">
        {props.children}
      </a>
    </NextLink>
  )
}

function FooterLink(props) {
  return (
    <a
      href={props.href}
      className="block py-1 text-gray-900 xs:mb-0 xs:mr-4 dark:text-gray-100 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  )
}
