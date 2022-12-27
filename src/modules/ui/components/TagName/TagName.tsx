import React, { HTMLAttributes, ReactHTML } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  tagName?: keyof ReactHTML
}

export default function TagName({
  tagName = 'div',
  children,
  ...props
}: Props) {
  return React.createElement(tagName, props, children)
}
