import DeepPartial from '../types/DeepPartial'
import merge from 'lodash/merge'

/**
 * 创建HTML元素
 * @param tagName HTML标签名
 * @param attrs 属性
 * @returns HTML元素
 */
const createEl = <
  TagName extends keyof HTMLElementTagNameMap,
  Attrs extends DeepPartial<HTMLElementTagNameMap[TagName]>
>(
  tagName: TagName,
  attrs = {} as Attrs
) => {
  const el = document.createElement(tagName)
  merge(el, attrs)
  return el
}

export default createEl
