import { ICommonStore } from './common.store'
import { IWeather } from '../entities'

export interface IWeatherStore extends ICommonStore {
  data: null | IWeather
  city: string
  setCity(city: string): void
  getWeather(): Promise<void>
}
