import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   const styles = extractCritical(initialProps.html)
  //   return {
  //     ...initialProps,
  //     styles: (
  //       <>
  //         {initialProps.styles}
  //         <style
  //           data-emotion-css={styles.ids.join(' ')}
  //           dangerouslySetInnerHTML={{ __html: styles.css }}
  //         />
  //       </>
  //     )
  //   }
  // }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/favicons/safari-pinned-tab.svg" rel="mask-icon" color="#6366F1" />
          <link href="/favicons/site.webmanifest" rel="manifest" />
          <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta content="/static/favicons/browserconfig.xml" name="msapplication-config" />
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
