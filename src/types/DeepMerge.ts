/**
 * @example
 * // 深度合并 TypeA 和 TypeB
 * // 示例类型
 * type TypeA = {
 *   a: {
 *     x: number
 *     y: number
 *   }
 *   b: string
 * }
 * type TypeB = {
 *   a: {
 *     y: string
 *     z: boolean
 *   }
 *   c: number
 * }
 * type MergedType = DeepMerge<TypeA, TypeB>
 */
type DeepMerge<T, U> = T extends object
  ? U extends object
    ? {
        [K in keyof (T & U)]: K extends keyof T
          ? K extends keyof U
            ? DeepMerge<T[K], U[K]>
            : T[K]
          : K extends keyof U
          ? U[K]
          : never
      }
    : T
  : U

export default DeepMerge
