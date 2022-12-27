import { FCProps } from '@/modules/common'
import cn from 'clsx'
import s from './Button.module.css'

type Props = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  isStretch?: boolean
  color?: 'orange' | 'green' | 'basic' | 'red'
} & FCProps &
  React.ButtonHTMLAttributes<{}>

export default function Button({
  children,
  className,
  size = 'md',
  isStretch,
  color = 'green',
  ...others
}: Props) {
  return (
    <button
      className={cn(
        s.root,
        {
          [s.primary]: color === 'green',
          [s.danger]: color === 'orange',
          [s.red]: color === 'red',
          [s.basic]: color === 'basic',
          [s.stretch]: isStretch,
        },
        className,
      )}
      {...others}
    >
      {children}
    </button>
  )
}
