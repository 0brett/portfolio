import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
