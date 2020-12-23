import * as React from 'react'
import NextLink from 'next/link'
import urls from 'utils/sitemap'

const currentYear = new Date().getFullYear()

const textStyles = 'text-gray-500 dark:text-gray-300 text-base'
const textSubStyles = 'text-gray-400 dark:text-gray-500'
const iconStyles = 'text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
const linkStyles = `hover:underline hover:text-gray-900 dark:hover:text-white ${textStyles}`

export default function Footer() {
  return (
    <footer aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <FooterIntro />
            <section className="flex space-x-6">
              <FooterIconLink href="https://linkedin.com/in/1brett" title="LinkedIn">
                <path
                  fillRule="evenodd"
                  d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"
                />
              </FooterIconLink>
              <FooterIconLink href="https://twitter.com/1brett_" title="Twitter">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </FooterIconLink>
              <FooterIconLink href="https://github.com/01brett" title="GitHub">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </FooterIconLink>
            </section>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <section className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterHeading>Sitemap</FooterHeading>
                <ul className="mt-4 space-y-4">
                  {urls.map((url, idx) => (
                    <li key={idx}>
                      <FooterNextLink href={url.href}>{url.text}</FooterNextLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <FooterHeading>Projects</FooterHeading>
                <ul className="mt-4 space-y-4">
                  <li>
                    <FooterNextLink href="/#">Coming Soon...</FooterNextLink>
                  </li>
                </ul>
              </div>
            </section>
            <section className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterHeading>Writing</FooterHeading>
                <ul className="mt-4 space-y-4">
                  <li>
                    <FooterNextLink href="/#">Coming Soon...</FooterNextLink>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <FooterHeading>DSGN</FooterHeading>
                <ul className="mt-4 space-y-4">
                  <li>
                    <FooterNextLink href="/#">Coming Soon...</FooterNextLink>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className={`text-base xl:text-center ${textSubStyles}`}>
            &copy; 2011–{currentYear} Brett Flora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterIntro() {
  return (
    <>
      <span className="sr-only">BF logo</span>
      <svg
        className="h-10 text-gray-400"
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.6181 29.9688C14.8709 29.9688 19.7434 28.4197 19.7434 23.857C19.7434 21.0969 17.0678 19.9703 14.364 19.7731C17.6593 19.4915 20.9264 17.8579 20.9264 14.3937C20.9264 11.4364 18.4197 10.2535 14.7583 10.2535H4.90065V10.3098C5.54844 10.8449 5.85825 11.3237 5.85825 12.0842C5.85825 12.5067 5.77376 13.0136 5.63293 13.6614L2.394 26.5327C1.9152 28.3915 1.46456 29.0957 0 29.9124V29.9688H10.6181ZM9.35067 19.5197L11.4912 11.0139H12.8431C14.9554 11.0139 15.9412 12.1687 15.9412 14.0839C15.9412 17.2665 13.7444 19.5197 10.7026 19.5197H9.35067ZM6.95667 29.2083L9.18169 20.2238H10.8997C13.4909 20.2238 14.6738 21.294 14.6738 23.3782C14.6738 26.8706 12.2798 29.2083 8.84371 29.2083H6.95667Z" />
        <path d="M28.7905 20.6181H31.4943C33.7756 20.6181 34.4797 20.8997 34.7332 23.4909H34.7895L36.4512 16.7595H36.3949C34.874 19.3788 33.9728 19.8013 31.6914 19.8013H28.9876L31.1563 11.0139H34.1417C37.6905 11.0139 38.6763 12.6475 39.6057 15.4639H39.662L40 10C39.5494 10.1972 38.9016 10.2535 37.9158 10.2535H24.5939V10.3098C25.2699 10.8449 25.5797 11.3237 25.5797 12.0842C25.5797 12.5067 25.4952 13.0136 25.3262 13.6614L22.0873 26.5327C21.6085 28.3915 21.1578 29.0957 19.6933 29.9124V29.9688H28.6215V29.9124C27.5512 29.2928 27.0724 28.814 27.0724 27.9409C27.0724 27.5748 27.1287 27.1523 27.2696 26.6453L28.7905 20.6181Z" />
      </svg>
      <p className={textStyles}>Thanks for stopping by.</p>
    </>
  )
}

type FooterHeadingProps = {
  children: React.ReactNode
}

function FooterHeading({ children }: FooterHeadingProps) {
  return (
    <h3 className={`text-sm font-bold tracking-wider uppercase ${textSubStyles}`}>{children}</h3>
  )
}

type FooterLinkProps = {
  title?: string
  href: string
  children: React.ReactNode
}

function FooterNextLink({ href, children }: FooterLinkProps) {
  return (
    <NextLink href={href}>
      <a className={linkStyles}>{children}</a>
    </NextLink>
  )
}

function FooterIconLink({ title, href, children }: FooterLinkProps) {
  return (
    <a href={href} className={iconStyles} target="_blank" rel="noopener noreferrer">
      <span className="sr-only">{title}</span>
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </a>
  )
}
