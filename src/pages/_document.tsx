import { Gtag } from '@/modules/common'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body className="">
          <Gtag />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
