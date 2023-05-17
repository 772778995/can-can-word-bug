/**
 * 提取两个类型的公共属性并返回一个新的类型
 * @param T1 类型一
 * @param T2 类型二
 * @example
 * type TypeA = {
 *   prop1: number;
 *   prop2: number;
 * }
 * type TypeB = {
 *   prop1: string;
 *   prop3: boolean;
 * }
 * 
 * type TypeC = ExtractCommonProps<TypeA, TypeB> // { prop1: number | string }
 */
type ExtractCommonProps<T1, T2> = {
  [K in keyof T1 & keyof T2]: T1[K] | T2[K];
};

export default ExtractCommonProps