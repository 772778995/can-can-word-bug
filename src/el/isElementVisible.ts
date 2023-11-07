/** 判断元素是否可见 */
const isElementVisible = (
  /** 目标元素 */
  target: HTMLElement,
  /**
   * 容器元素
   * @default document.body
   */
  container: HTMLElement = document.body
) => {
  const containerRect = container.getBoundingClientRect()
  const targetRect = target.getBoundingClientRect()

  return targetRect.top >= containerRect.top && targetRect.bottom <= containerRect.bottom
}

export default isElementVisible