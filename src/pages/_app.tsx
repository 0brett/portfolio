import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import MDXComponents from 'components/MDXComponents'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXComponents>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Component {...pageProps} />
    </MDXComponents>
  )
}
