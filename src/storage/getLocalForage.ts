import localforage from 'localforage'

/**
 * 获取 localForage
 * @example 
 * const localForage = getLocalForage<{
 *   yourKey: 'yourValue'
 * }>()
 * 
 * localForage.setItem('yourKey', 'yourValue')
 * localForage.getItem('yourKey')
 */
const getLocalForage = <T extends { [k: string]: unknown }>() => ({
  ...localforage,
  /** 设置本地储存 */
  async setItem<K extends (keyof T) & string>(
    /** 要储存的键 */
    key: K,
    /** 要储存的值 */
    val: T[K]
  ) {
    return localforage.setItem(key, val)
  },
  /** 获取本地储存 */
  getItem<K extends (keyof T) & string>(
    /** 要获取的储存的键 */
    key: K
  ) {
    return localforage.getItem(key) as Promise<T[K] | null>
  }
})

export default getLocalForage
