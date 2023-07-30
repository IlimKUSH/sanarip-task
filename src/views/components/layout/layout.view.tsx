import React, { FC, PropsWithChildren } from 'react'
import styles from './layout.module.scss'
import { Header } from '../header/header.view'

export const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <main className={styles.layout}>
      <Header />
      <div className={styles.container}>{props.children}</div>
    </main>
  )
}
