import localforage from 'localforage'

export interface ILocalForage {}

/** 本地储存 */
export const localForage = {
  ...localforage,
  /**
   * 设置本地储存
   * @example
   * declare module 'can-can-word-bug' {
   *  interface LocalForage { yourKey: 'yourValue' }
   * }
   * localStorage.setItem(yourKey, 'yourValue')
   */
  async setItem<K extends keyof ILocalForage>(
    /** 要储存的键 */
    key: K,
    /** 要储存的值 */
    val: ILocalForage[K]
  ) {
    return localforage.setItem(key, val)
  },
  /** 获取本地储存 */
  getItem<K extends keyof ILocalForage>(key: K) {
    return localforage.getItem(key) as Promise<ILocalForage[K] | null>
  }
}

export default localForage
