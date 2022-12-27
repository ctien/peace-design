import { NextSeo, NextSeoProps } from 'next-seo'
import Head from 'next/head'
import {
  renderMetaTags,
  SeoOrFaviconTag,
  TitleMetaLinkTag
} from 'react-datocms'

interface Props extends NextSeoProps {
  metaTags?: TitleMetaLinkTag[] | SeoOrFaviconTag[]
}

export default function Seo({ metaTags, ...props }: Props) {
  return (
    <>
      <NextSeo {...props} />
      {metaTags && <Head>{renderMetaTags(metaTags)}</Head>}
    </>
  )
}
