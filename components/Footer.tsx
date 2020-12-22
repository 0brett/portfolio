import * as React from 'react'
import NextLink from 'next/link'
import urls from 'utils/sitemap'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <div className="w-full py-8 mt-8 text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-800 sm:pt-16 sm:mt-16">
      <footer className="grid max-w-2xl px-3 mx-auto sm:grid-cols-footer">
        <FooterIntro />
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
            <FooterLink href="https://twitter.com/1brett_">@1brett_</FooterLink>
            <FooterLink href="https://github.com/01brett">github</FooterLink>
            <FooterLink href="https://linkedin.com/in/1brett">linkedin</FooterLink>
          </div>
        </section>
        <p className="mt-4 text-sm sm:hidden">
          © 2011–{currentYear} Brett Flora. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

function FooterIntro() {
  return (
    <section className="flex flex-col justify-between mb-8 sm:mb-0 sm:pb-3">
      <div>
        <h3 className="mb-3 text-xl font-black">Brett Flora</h3>
        <p>Thanks for stopping by.</p>
      </div>
      <p className="hidden sm:block border-transparent border-b-2 text-sm">
        © 2011–{currentYear} Brett Flora. All rights reserved.
      </p>
    </section>
  )
}

type FooterHeadingProps = {
  children: React.ReactNode
}

function FooterHeading({ children }: FooterHeadingProps) {
  return <h4 className="mb-0.5 text-sm font-black">{children}</h4>
}

type FooterLinkProps = {
  href: string
  children: React.ReactNode
}

const linkStyles = 'block py-3 hover:underline'

function FooterNextLink({ href, children }: FooterLinkProps) {
  return (
    <NextLink href={href}>
      <a className={linkStyles}>{children}</a>
    </NextLink>
  )
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a href={href} className={linkStyles} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
