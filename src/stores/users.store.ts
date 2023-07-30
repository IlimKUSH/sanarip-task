import { makeAutoObservable, runInAction } from 'mobx'
import { getErrorMessage } from '../shared/error-message'
import { BackendRoutes } from '../routes/backend.routes'
import { IUsersStore } from '../models/stores/users.store'
import { IUser } from '../models/entities'
import { IRootStore } from '../models/stores/root.store'

export class UsersStore implements IUsersStore {
  public readonly rootStore: IRootStore

  public data: null | IUser[] = null
  public loading = true
  public error?: string = undefined

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore

    makeAutoObservable(this, {
      rootStore: false,
    })
  }

  public async getUsers(): Promise<void> {
    try {
      runInAction(() => {
        this.data = null
        this.loading = true
        this.error = undefined
      })

      const response = await this.rootStore.requests.json<IUser[]>({
        baseURL: process.env.REACT_APP_API_URL,
        route: BackendRoutes.users,
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
