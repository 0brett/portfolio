import { Url } from 'my-types'

import * as React from 'react'
import NextLink from 'next/link'
import { IconContext } from 'react-icons'
import { FaTwitter, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa'

import sitemap from 'utils/sitemap'

const currentYear = new Date().getFullYear()

const textStyles = 'text-gray-600 dark:text-gray-300 text-base'
const textSubStyles = 'text-gray-400 dark:text-gray-500'
const iconStyles = 'h-6 w-6 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
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
              <FooterIconLink href="https://twitter.com/1brett_" title="Twitter">
                <FaTwitter />
              </FooterIconLink>

              <FooterIconLink href="https://linkedin.com/in/1brett" title="LinkedIn">
                <FaLinkedinIn />
              </FooterIconLink>
              <FooterIconLink href="https://github.com/01brett" title="GitHub">
                <FaGithubAlt />
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

function FooterNextLink({ href, children }: Url) {
  return (
    <NextLink href={href}>
      <a className={linkStyles}>{children}</a>
    </NextLink>
  )
}

function FooterIconLink({ title, href, children }: Url) {
  return (
    <IconContext.Provider value={{ size: '100%', className: iconStyles }}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span className="sr-only">{title}</span>
        {children}
      </a>
    </IconContext.Provider>
  )
}
