/* eslint-disable no-unused-vars */
import localforage from 'localforage'

interface LocalForageDbInstanceOptions {
  /** 啊啊啊 */
  name?: string

  storeName?: string
}

interface LocalForageOptions extends LocalForageDbInstanceOptions {
  driver?: string | string[]

  size?: number

  version?: number

  description?: string
}

/**
 * 获取 localForage
 * @example
 * const localForage = getLocalForage<{
 *   yourKey: 'yourValue'
 * }>()
 *
 * // 设置key对应的值
 * localForage.setItem('yourKey', 'yourValue')
 *
 * // 获取key对应的值
 * localForage.getItem('yourKey')
 *   .then(val => {
 *     console.log(val) // 'yourValue'
 *   })
 *
 * // 删除key对应的值
 * localForage.removeItem('yourKey')
 *
 * // 删除所有的key，并且重置数据库
 * localForage.clear()
 *
 * // 迭代数据库中所有的键值对，如果有一个value是undefined，就会推出，并且将 该键传入成功回调内
 * localForage
 *   .iterate((v, k, i) => {
 *     console.log(v, k, i)
 *   })
 *   .then(() => console.log('迭代完成'))
 */
const getLocalForage = <T extends { [k: string]: unknown }>(opts: LocalForageOptions = {}) => {
  return localforage.createInstance(opts) as Omit<
    LocalForage,
    'setItem' | 'getItem' | 'removeItem' | 'keys' | 'iterate'
  > & {
    /** 设置key对应的值 */
    setItem: <K extends keyof T & string>(key: K, val: T[K]) => Promise<void>
    /** 获取key对应的值 */
    getItem: <K extends keyof T & string>(key: K) => Promise<T[K] | null>
    /** 删除key对应的值 */
    removeItem: <K extends keyof T & string>(key: K) => Promise<void>
    /** 获取所有key值 */
    keys: <K extends keyof T & string>() => Promise<K[]>
    /** 迭代数据库中所有的键值对，如果有一个value是undefined，就会推出，并且将 该键传入成功回调内 */
    iterate: <
      K extends keyof T & string,
      Cb extends (value: T[K], key: K, iterationNumber: number) => any
    >(
      cb: Cb
    ) => Promise<void>
  }
}

export default getLocalForage