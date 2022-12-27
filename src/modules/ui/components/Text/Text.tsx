import { FCProps } from '@/modules/common'
import { ReactHTML } from 'react'
import TagName from '../TagName/TagName'
import cn from 'clsx'

type VariantName = 'sectionTitle' | 'sectionTitle1' | 'sectionTitle2' | 'body'

interface VariantInfo {
  className: string
  tagName: keyof ReactHTML
}

const variants: Record<VariantName, VariantInfo> = {
  sectionTitle: {
    className:
      'text-center text-orange-500 lg:text-4xl text-3xl font-semibold mb-16',
    tagName: 'h3',
  },
  sectionTitle1: {
    className: 'text-lg font-medium',
    tagName: 'h3',
  },
  sectionTitle2: {
    className: 'font-medium py-2 px-4 bg-orange-500 w-fit text-white',
    tagName: 'h3',
  },
  body: {
    tagName: 'p',
    className: '',
  },
}

interface Props extends FCProps {
  className?: string
  variant?: VariantName
  tagName?: keyof ReactHTML
}

export default function Text({
  children,
  className,
  tagName,
  variant = 'body',
  ...other
}: Props) {
  return (
    <TagName
      tagName={tagName || variants[variant].tagName}
      className={cn([variants[variant].className, className])}
      {...other}
    >
      {children}
    </TagName>
  )
}
