import React from 'react'
import { Container } from '../Container'
import cn from 'clsx'
import { FCProps } from '@/modules/common'

interface Props extends FCProps {
  title?: string
  className?: string
}

export default function Section({
  children,
  title,
  className,
  ...other
}: Props) {
  return (
    <div className={cn(['lg:my-32 my-16', className])} {...other}>
      <Container>
        {title && (
          <h3 className="text-center text-orange-500 uppercase lg:text-4xl text-3xl font-semibold  mb-16">
            {title}
          </h3>
        )}
        {children}
      </Container>
    </div>
  )
}
