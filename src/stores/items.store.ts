import { makeAutoObservable } from 'mobx'
import { IRootStore } from '../models/stores/root.store'
import { IItemsStore } from '../models/stores/items.store'

export class ItemsStore implements IItemsStore {
  public readonly rootStore: IRootStore

  public items: string[] = []

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore

    makeAutoObservable(this, {
      rootStore: false,
    })
  }

  addItem() {
    const newItem = `Item ${this.items.length + 1}`
    this.items.push(newItem)
  }
}
