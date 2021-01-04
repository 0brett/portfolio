import Document, { Html, Head, Main, NextScript } from 'next/document'
import GoogleFonts from 'next-google-fonts'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@200..900&display=swap" />
        <Head>
          <link href="/favicons/favicon.svg" type="image/svg+xml" rel="shortcut icon" />
          <link href="/favicons/favicon.ico" rel="alternate icon" />
          <link href="/favicons/safari-pinned-tab.svg" rel="mask-icon" color="#4F46E5" />
          <link href="/favicons/site.webmanifest" rel="manifest" />
          <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta content="/static/favicons/browserconfig.xml" name="msapplication-config" />
          <meta
            name="description"
            content="Software engineer, former UX Designer, and avocado enthusiast."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
