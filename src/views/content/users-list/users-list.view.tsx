import React, { ChangeEvent, FC, useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { appStoreContext } from '../../../stores/context.store'
import { Loader } from '../../components/loader/loader.view'
import styles from './users-list.module.scss'

export const UsersList: FC = observer(() => {
  const [searchName, setSearchName] = useState('')
  const appStore = useContext(appStoreContext)
  const { data, loading } = appStore.users

  useEffect(() => {
    appStore.users.getUsers()
  }, [])

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value)
  }

  const filteredUsers = data?.filter((user) =>
    user.name.toLowerCase().includes(searchName.toLowerCase()),
  )

  return (
    <div>
      <input
        className={styles.input}
        placeholder='Поиск по имени'
        type='text'
        value={searchName}
        onChange={handleSearchChange}
      />
      {loading ? (
        <Loader />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Email</th>
              <th>Адрес</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.length ? filteredUsers?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan={3}>Нет данных</td>
              </tr>
              )}
          </tbody>
        </table>
      )}
    </div>
  )
})
