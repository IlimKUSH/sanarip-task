import { makeAutoObservable, runInAction } from 'mobx'
import { getErrorMessage } from '../shared/error-message'
import { BackendRoutes } from '../routes/backend.routes'
import { IWeather } from '../models/entities'
import { IRootStore } from '../models/stores/root.store'
import { IWeatherStore } from '../models/stores/weather.store'
import { City } from '../constants';

export class WeatherStore implements IWeatherStore {
  public readonly rootStore: IRootStore

  public data: null | IWeather = null
  public city = City
  public loading = true
  public error?: string = undefined

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore

    makeAutoObservable(this, {
      rootStore: false,
    })
  }

  setCity(city: string) {
    this.city = city
  }

  public async getWeather(): Promise<void> {
    try {
      runInAction(() => {
        this.data = null
        this.loading = true
        this.error = undefined
      })

      const response = await this.rootStore.requests.json<IWeather>({
        baseURL: process.env.REACT_APP_WEATHER_API_URL,
        route: BackendRoutes.weather,
        params: {
          q: this.city,
          lang: 'ru',
          units: 'metric',
          APPID: process.env.REACT_APP_WEATHER_API_KEY,
        },
      })

      runInAction(() => {
        this.data = response
        this.loading = false
      })
    } catch (error) {
      console.error(error)
      runInAction(() => {
        this.error = getErrorMessage(error)
        this.loading = false
      })
    }
  }
}
