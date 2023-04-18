/**
 * 引用数据类型替代 any 类型
 * @example
 * const unknowObj: any = {} // 戳啦
 * const unknowObj: Object = {}
 */
type Object = { [k: string | number]: unknown }

export default Object
