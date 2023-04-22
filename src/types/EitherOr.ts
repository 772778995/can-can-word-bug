type FilterOptional<T> = Pick<
  T,
  Exclude<
    {
      [K in keyof T]: T extends Record<K, T[K]> ? K : never
    }[keyof T],
    undefined
  >
>

type FilterNotOptional<T> = Pick<
  T,
  Exclude<
    {
      [K in keyof T]: T extends Record<K, T[K]> ? never : K
    }[keyof T],
    undefined
  >
>

type PartialEither<T, K extends keyof any> = {
  [P in Exclude<keyof FilterOptional<T>, K>]-?: T[P]
} &
  { [P in Exclude<keyof FilterNotOptional<T>, K>]?: T[P] } &
  {
    // eslint-disable-next-line no-unused-vars
    [P in Extract<keyof T, K>]?: undefined
  }

/**
 * 属性二选一
 * @example
 * type RawType = { a: 'a', b: 'b' }
 * type ResType = EitherOr<RawType, 'a', 'b'> // 只能存在 a 或者 b
 *
 * const a: ResType = { a: 'a' }
 * const b: ResType = { b: 'b' }
 * const c: ResType = { a: 'a', b: 'b', } // 报错
 */
type EitherOr<O extends Object, L extends string, R extends string> = (
  | PartialEither<Pick<O, (L | R) & keyof O>, L>
  | PartialEither<Pick<O, (L | R) & keyof O>, R>
) &
  Omit<O, L | R>

export default EitherOr
