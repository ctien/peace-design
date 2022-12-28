import Head from 'next/head'
import React from 'react'

export default function Gtag() {
  return (
    <div>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());gtag('config', '${process.env.GA_TRACKING_ID}', {page_path: window.location.pathname});`,
          }}
        />
        <meta
          name="google-site-verification"
         />
      </Head>
    </div>
  )
}
