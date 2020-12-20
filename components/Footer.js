import NextLink from "next/link"
import urls from "utils/sitemap"

const currentYear = new Intl.DateTimeFormat("en-US", {
  year: "numeric"
}).format(new Date())

export default function Footer() {
  return (
    <div className="w-full py-8 mt-8 text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-800 sm:pt-16 sm:mt-16">
      <footer className="grid max-w-2xl px-3 mx-auto sm:grid-cols-footer">
        <section className="flex flex-col justify-between mb-8 sm:mb-0 sm:pb-3">
          <div>
            <h3 className="mb-3 text-xl font-black">Brett Flora</h3>
            <p>Thanks for stopping by.</p>
          </div>
          <p className="hidden sm:block border-transparent border-b-2 text-sm">
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
        <p className="mt-4 text-sm sm:hidden">
          © 2011–{currentYear} Brett Flora. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

function FooterHeading(props) {
  return <h4 className="mb-0.5 text-sm font-black">{props.children}</h4>
}

const linkStyles = "block py-3 hover:underline"

function FooterNextLink(props) {
  return (
    <NextLink href={props.href}>
      <a className={linkStyles}>{props.children}</a>
    </NextLink>
  )
}

function FooterLink(props) {
  return (
    <a
      href={props.href}
      className={linkStyles}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  )
}
