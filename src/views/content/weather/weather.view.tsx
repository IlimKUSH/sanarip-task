import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react'
import { appStoreContext } from '../../../stores/context.store'
import styles from './weather.module.scss'

export const Weather = observer(() => {
  const appStore = useContext(appStoreContext)
  const { data, city, error } = appStore.weather

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    appStore.weather.setCity(e.target.value)
  }

  const handleFetchWeather = () => {
    appStore.weather.getWeather()
  }

  useEffect(() => {
    appStore.weather.getWeather()
  }, [])

  return (
    <div>
      <input
        type='text'
        placeholder='Введите название города'
        className={styles.input}
        value={city}
        onChange={handleInputChange}
      />
      <button className={styles.button} onClick={handleFetchWeather}>
        Показать погоду
      </button>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.container}>
        {data && (
          <div className={styles.card}>
            <h2>{data.name}</h2>
            <p>Температура: {data.main.temp} °C</p>
            <p>Влажность: {data.main.humidity} %</p>
            <p>Погода: {data.weather[0].description}</p>
            <img
              className={styles.icon}
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt='Weather Icon'
            />
          </div>
        )}
      </div>
    </div>
  )
})
