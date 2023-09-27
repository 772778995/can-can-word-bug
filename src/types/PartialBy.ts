/**
 * 使类型指定的属性为可选属性
 * @example
 * interface Person {
 *   name: string;
 *   age: number;
 *   address: string;
 * }
 * const partialPerson: PartialBy<Person, 'age' | 'address'> = {
 *   name: 'John',
 *   age: 30, // 可选属性，可选择性地提供
 * };
 */
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export default PartialBy