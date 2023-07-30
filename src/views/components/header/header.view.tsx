import React, { FC } from 'react'
import { headerItems } from '../../../constants/header'
import { Link, useLocation } from 'react-router-dom'
import cx from 'classnames'
import styles from './header.module.scss'

export const Header: FC = () => {
  const { pathname } = useLocation()
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {headerItems.map(({ title, href }) => {
          const active = pathname === href
          const linkCN = cx(styles.link, {
            [styles.active]: active,
          })
          return (
            <Link className={linkCN} key={title} to={href}>
              {title}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
