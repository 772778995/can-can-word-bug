import localforage from 'localforage'

export interface LocalForage {}

/** 本地储存 */
export const localForage = {
  ...localforage,
  /**
   * 设置本地储存
   * @example
   * declare module 'can-can-word-bug' {
   *  interface LocalForage { yourKey: 'yourValue' }
   * }
   * localStorage.set(yourKey, 'yourValue')
   */
  async set<K extends keyof LocalForage>(
    /** 要储存的键 */
    key: K,
    /** 要储存的值 */
    val: LocalForage[K]
  ) {
    return localforage.setItem(key, val)
  },
  /** 获取本地储存 */
  getItem<K extends keyof LocalForage>(key: K) {
    return localforage.getItem(key) as Promise<LocalForage[K] | null>
  }
}

export default localForage
