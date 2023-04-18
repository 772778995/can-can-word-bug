/**
 * Required 泛型深度化
 * @example
 * type Person = {
 *  name?: string
 *  address?: {
 *    country?: string
 *  }
 * }
 * type PersonRequired = DeepRequired<Person>;
 * // {
 * //   name: string
 * //   address: {
 * //     country: string
 * //   }
 * // }
 */
type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends (infer U)[]
    ? DeepRequired<U>[]
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepRequired<U>>
    : DeepRequired<T[P]>
}

export default DeepRequired
