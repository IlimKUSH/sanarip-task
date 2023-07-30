import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { appStoreContext } from '../../../stores/context.store'
import styles from './js-basics.module.scss'

export const JsBasics = observer(() => {
  const appStore = useContext(appStoreContext)
  const { items } = appStore.items

  const handleAddItem = (): void => {
    appStore.items.addItem()
  }
  return (
    <div>
      <button className={styles.button} onClick={handleAddItem}>
        Добавить
      </button>
      <ul className={styles.menu}>
        {items.map((item) => (
          <li className={styles.item} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
})
