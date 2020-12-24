import * as React from 'react'

import Head from 'next/head'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

type ContainerProps = {
  title?: string
  className?: string
  children: React.ReactNode
}

export default function Container({
  title,
  className = 'w-full min-h-screen max-w-7xl mx-auto px-4 px-4 sm:px-6 lg:px-8',
  children
}: ContainerProps) {
  return (
    <>
      <Head>
        <title>{title ? `${title} – Brett Flora` : 'Brett Flora • Software Engineer'}</title>
      </Head>
      <Navbar />
      <main className={className}>{children}</main>
      <Footer />
    </>
  )
}
