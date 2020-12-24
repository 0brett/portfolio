import * as React from 'react'
import { LinkProps } from 'my-types'
import NextLink from 'next/link'
import sitemap from 'utils/sitemap'

const currentYear = new Date().getFullYear()

const textStyles = 'text-gray-600 dark:text-gray-300 text-base'
const textSubStyles = 'text-gray-400 dark:text-gray-500'
const iconStyles = 'text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
const linkStyles = `hover:underline hover:text-gray-900 dark:hover:text-white ${textStyles}`

function FooterIntro() {
  return (
    <>
      <span className="sr-only">BF logo</span>
      <svg
        className={`h-10 ${textSubStyles}`}
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.7847 32.375V32.2009C10.9391 31.4348 10.1338 31.2259 10.1338 30.1813C10.1338 29.9375 10.1673 29.6938 10.2345 29.3455L15.402 8H5.70445V8.17411C7.65068 9.04464 8.45601 9.25357 8.45601 10.2286C8.45601 10.4723 8.42246 10.7161 8.35534 11.0643L3.92601 29.3455C3.52334 31.1214 2.78511 31.1911 0 32.2009V32.375H12.7847Z" />
        <path d="M26.7186 32.375C31.7855 32.375 37.5907 30.4598 37.5907 24.8188C37.5907 21.4063 34.4029 20.0134 31.1815 19.7696C35.1075 19.4214 39 17.4018 39 13.1187C39 9.4625 36.0136 8 31.6513 8H19.9069V8.06964C20.6786 8.73125 21.0478 9.32321 21.0478 10.2634C21.0478 10.7857 20.9471 11.4125 20.7793 12.2134L16.9204 28.1268C16.35 30.425 15.8131 31.2955 14.0682 32.3054V32.375H26.7186ZM25.2086 19.4563L27.7589 8.94018H29.3695C31.8862 8.94018 33.0607 10.3679 33.0607 12.7357C33.0607 16.6705 30.4433 19.4563 26.8193 19.4563H25.2086ZM22.3564 31.4348L25.0073 20.3268H27.0542C30.1413 20.3268 31.5507 21.65 31.5507 24.2268C31.5507 28.5446 28.6984 31.4348 24.6046 31.4348H22.3564Z" />
      </svg>
      <p className={textStyles}>Thanks for stopping by.</p>
    </>
  )
}

export default function Footer() {
  return (
    <footer aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
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
                  {sitemap.topLevel.map((url, idx) => (
                    <li key={idx}>
                      <FooterNextLink href={url.href}>{url.title}</FooterNextLink>
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

type FooterHeadingProps = {
  children: React.ReactNode
}

function FooterHeading({ children }: FooterHeadingProps) {
  return (
    <h3 className={`text-sm font-bold tracking-wider uppercase ${textSubStyles}`}>{children}</h3>
  )
}

function FooterNextLink({ href, children }: LinkProps) {
  return (
    <NextLink href={href}>
      <a className={linkStyles}>{children}</a>
    </NextLink>
  )
}

function FooterIconLink({ title, href, children }: LinkProps) {
  return (
    <a href={href} className={iconStyles} target="_blank" rel="noopener noreferrer">
      <span className="sr-only">{title}</span>
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </a>
  )
}
