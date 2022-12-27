import { SessionProvider } from 'next-auth/react'
import '@/assets/styles/globals.css'
import { DefaultSeo } from 'next-seo'

const Noop = ({ children }: any) => <>{children}</>

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  const Layout = (Component as any).Layout || Noop

  return (
    <SessionProvider session={session}>
      <Layout>
        <DefaultSeo />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
