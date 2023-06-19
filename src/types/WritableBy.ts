import Writable from './Writable'

/**
 * 使类型指定的属性为可选属性
 * @example
 * type Person = Readonly<{
 *   name: string;
 *   age: number;
 *   address: string;
 * }>
 * const writablePerson: WritableBy<Person, 'age' | 'address'> = {
 *   name: '只读属性',
 *   age: 30, // 可写属性
 *   address: 'xxx'
 * };
 * writablePerson.age = 12   // success
 * writablePerson.name = 'xxx' // error
 */
type WritableBy<T, K extends keyof T> = Omit<T, K> & Writable<Pick<T, K>>

export default WritableBy