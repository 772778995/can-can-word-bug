import Enumerate from './Enumerate'

/**
 * 0 到 9 的字面量类型
 * @param HasZero 是否包含 '0'，默认：true
 * @example
 * type Num = NumChar // "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
 * type Num = NumChar<true> // "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
 * type NoZeroNum = NumChar<false>  // "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
 */
type NumChar<HasZero extends boolean = true> = Exclude<`${Enumerate<10>}`, HasZero extends true ? never : '0'>

export default NumChar