import Head from "next/head"
import Nav from "components/Nav"
import Footer from "components/Footer"

export default function Container(props) {
  return (
    <>
      <Head>
        <title>{props.title}Brett Flora • Engineer</title>
      </Head>
      <Nav />
      <main className="w-full min-h-screen max-w-2xl px-4 mx-auto">
        {props.children}
      </main>
      <Footer />
    </>
  )
}
