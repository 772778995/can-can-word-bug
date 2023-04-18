/**
 * 与 Readonly 相反，从一个对象类型中去掉 readonly 修饰符，使其所有属性可写。
 */
type Writable<T> = { -readonly [P in keyof T]: T[P] }

export default Writable
