/**
 * 遍历类型的值的类型，类似关键字 keyof
 * @example
 * interface Person {
 *  name: string;
 *  age: number;
 * }
 * type PersonValues = ValueOf<Person>; // string | number
 */
type ValueOf<T> = T[keyof T]
export default ValueOf
