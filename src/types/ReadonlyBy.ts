/**
 * 使类型指定的属性为可选属性
 * @example
 * interface Person {
 *   name: string;
 *   age: number;
 *   address: string;
 * }
 * const readonlyPerson: ReadonlyBy<Person, 'age' | 'address'> = {
 *   name: 'John',  // writable
 *   age: 30,       // readonly
 *   address: 'xxx' // readonly
 * };
 * readonlyPerson.name = 'whc4088' // success
 * readonlyPerson.address = 'xxx'  // error
 */
type ReadonlyBy<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>

export default ReadonlyBy