import React from 'react'
import { SeoOrFaviconTag, TitleMetaLinkTag } from 'react-datocms'

export type FCProps = {
  children?: React.ReactNode
  className?: string
}

export interface SeoSettings {
  title: string
  description: string
  image: {
    alt: string
    url: string
  }
}

export type SeoMetaTags = TitleMetaLinkTag[] | SeoOrFaviconTag[]
