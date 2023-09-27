/**
 * promise 延迟函数
 * @example
 * const fn = async () => {
 *   await delay(10000)
 *   console.log('hello')
 * }
 */
const delay = (
  /**
   * 延迟多少毫秒
   * @default 300
   */
  time = 300
) => new Promise(resolve => setTimeout(resolve, time))

export default delay