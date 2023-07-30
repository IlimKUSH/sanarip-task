import { IUser } from '../entities'
import { ICommonStore } from './common.store'

export interface IUsersStore extends ICommonStore {
  data: null | IUser[]
  getUsers(): Promise<void>
}
