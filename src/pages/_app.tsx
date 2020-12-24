import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import MDXComps from 'components/MDXComps'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXComps>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Component {...pageProps} />
    </MDXComps>
  )
}
