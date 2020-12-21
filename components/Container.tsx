import * as React from "react"

import Head from "next/head"

import Nav from "components/Nav"
import Footer from "components/Footer"

type ContainerProps = {
  title: string
  main: string
  children: React.ReactNode
}

export default function Container({
  title,
  main = "w-full min-h-screen max-w-2xl px-3 mx-auto",
  children
}: ContainerProps) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} – Brett Flora` : "Brett Flora • Software Engineer"}
        </title>
      </Head>
      <Nav />
      <main className={main}>{children}</main>
      <Footer />
    </>
  )
}
