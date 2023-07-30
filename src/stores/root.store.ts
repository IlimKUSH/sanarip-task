import { IRootStore } from '../models/stores/root.store'
import { RequestsService } from './requests.service'
import { UsersStore } from './users.store'
import { ItemsStore } from './items.store'
import { WeatherStore } from './weather.store'

export class RootStore implements IRootStore {
  public readonly items: ItemsStore
  public readonly requests: RequestsService
  public readonly users: UsersStore
  public readonly weather: WeatherStore

  constructor() {
    this.items = new ItemsStore(this)
    this.requests = new RequestsService(this)
    this.users = new UsersStore(this)
    this.weather = new WeatherStore(this)
  }
}
