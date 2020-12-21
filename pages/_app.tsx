import "tailwindcss/tailwind.css"
import type { AppProps /*, AppContext */ } from "next/app"
import { ThemeProvider } from "next-themes"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
