/**
 * 使类型指定的属性为可选属性
 * @example
 * interface Person {
 *   name?: string;
 *   age?: number;
 *   address?: string;
 * }
 * const requiredPerson: RequiredBy<Person, 'age' | 'address'> = {
 *   age: 30, // 必选属性
 *   address: 'xxx'
 * };
 */
type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export default RequiredBy