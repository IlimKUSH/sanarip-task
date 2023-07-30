import React from 'react'
import styles from './loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
    </div>
  )
}
