import { IUsersStore } from './users.store'
import { IRequestService } from '../requests/http.models'
import { IItemsStore } from './items.store'

export interface IRootStore {
  items: IItemsStore
  users: IUsersStore
  requests: IRequestService
}
