import cn from 'clsx'

interface Props {
  className?: string
  py?: boolean
  nopx?: boolean
  children?: React.ReactNode
}

const Container = ({ children, nopx, className, ...rest }: Props) => {
  return (
    <div className={cn(['container mx-auto', className])} {...rest}>
      {children}
    </div>
  )
}

export default Container
