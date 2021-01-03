import Head from 'next/head'
import extend from 'lib/extend'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default function Container({ title, className, children }: React.HTMLProps<HTMLDivElement>) {
  const classNames = extend('screen-container', className)
  return (
    <>
      <Head>
        <title>{title ? title : 'Brett Flora • Software Engineer'}</title>
      </Head>
      <Navbar />
      <main className={classNames}>{children}</main>
      <Footer />
    </>
  )
}
