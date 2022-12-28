import { Gtag } from '@/modules/common'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <Gtag />
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
