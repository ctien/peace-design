import { Gtag } from '@/modules/common'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Gtag />
        </Head>

        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
