import { ChevronDownStroke } from '@/modules/icons'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NAVIGATION } from './Navbar.data'
import s from './Navbar.module.css'

type Props = {
  className?: string
}
export default function Navbar({ className, ...others }: Props) {
  const { pathname } = useRouter()
  const path = `/${pathname.split('/')[1]}`
  return (
    <ul className={cn([s.root, className])} {...others}>
      {NAVIGATION.map(({ href, title, subMenu }, index) => (
        <li className={s.item} key={index}>
          <Link href={href} passHref>
            <a className={cn([s.link, { [s.active]: path === href }])}>
              {title}&nbsp;
              {subMenu && <ChevronDownStroke />}
            </a>
          </Link>
          {subMenu && (
            <ul className={s.dropdown}>
              {subMenu.map(({ title, href }, i) => (
                <li key={i}>
                  <Link key={i} href={href}>
                    <a className={s.dropdownLink}>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
