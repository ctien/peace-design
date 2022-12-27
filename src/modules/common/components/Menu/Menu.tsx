import { ChevronDownStroke, ChevronUpStroke } from '@/modules/icons'
import cn from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'
import { NAVIGATION } from '../Navbar/Navbar.data'
import s from './Menu.module.css'

interface INav {
  title: string
  href: string
  subMenu?: INav[]
}

type MenuItemProps = {
  title: string
  href: string
  subMenu?: INav[]
}

export const MenuItem: FC<MenuItemProps> = ({ href, subMenu, title }) => {
  const [open, setOpen] = useState(false)

  return (
    <li className="border-b">
      <div className="flex w-full">
        <Link href={href}>
          <a className="block flex-grow py-4 capitalize hover:text-blue-500">
            {title}&nbsp;
          </a>
        </Link>
        {subMenu && (
          <button
            aria-label="item-toggle"
            className="px-4"
            onClick={() => setOpen(!open)}
          >
            {open ? <ChevronUpStroke /> : <ChevronDownStroke />}
          </button>
        )}
      </div>
      {subMenu && (
        <ul className={cn([open ? 'block px-4' : 'hidden'])}>
          {subMenu.map(({ title, href }, i) => {
            return (
              <li key={i} className="py-2">
                <a href={href} className={s.link}>
                  {title}&nbsp;
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

export default function Menu() {
  return (
    <ul className="px-8">
      {NAVIGATION.map((item, i) => {
        return <MenuItem key={i} {...item} />
      })}
    </ul>
  )
}
