import Head from 'next/head'
import cn from 'clsx'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default function Container({ title, className, children }: React.HTMLProps<HTMLDivElement>) {
  return (
    <>
      <Head>
        <title>{title ? title : 'Brett Flora • Software Engineer'}</title>
      </Head>
      <Navbar />
      <main className={cn('screen-container', className)}>{children}</main>
      <Footer />
    </>
  )
}
