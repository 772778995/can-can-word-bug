/**
 * Partial 泛型深度化
 * @example
 * type Person = {
 *  name: string
 *  address: {
 *    country: string
 *  }
 * }
 * type PersonPartial = DeepPartial<Person>;
 * // {
 * //   name?: Deep<string | undefined>;
 * //   address?: Deep<{
 * //     country: string;
 * //   } | undefined>;
 * // }
 */
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

export default DeepPartial
