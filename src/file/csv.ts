import createEl from '../el/createEl'

/**
 * # 获取 csv 表格字符串
 * ## 示例：
 * ```ts
 * getCsvStr([
 *    { name: '姓名', phone: '手机号', department: '部门' },
 *    { name: '张三', phone: '13777777777', department: '技术部' }
 * ]) // 姓名,手机号,部门\r\n张三,13777777777,技术部
 * ```
 * @param data 表格内容
 * @returns 返回 csv 字符串
 */
export const getCsvStr = (data: { [x: string]: string }[]) =>
  data.map(item => Object.values(item).join(',')).join('\r\n')

/**
 * # 导出 csv 文件
 * @param fileName 文件名
 * @param data 表格内容
 * @example
 * exportCsv([
 *  { name: '姓名', phone: '手机号', department: '部门' },
 *  { name: '张三', phone: '13777777777', department: '技术部' }
 * ])
 */
export const exportCsv = (fileName: string, data: { [x: string]: string }[]) => {
  const csvStr = getCsvStr(data)
  const href = 'data:application/vnd.ms-excel;charset=utf-8,\uFEFF' + encodeURIComponent(csvStr)
  const aEl = createEl('a', {
    href,
    download: fileName + '.csv'
  })
  aEl.click()
  aEl.remove()
}
