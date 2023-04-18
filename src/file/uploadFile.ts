import createEl from '../el/createEl'
import DeepPartial from '../types/DeepPartial'
import merge from 'lodash/merge'

/**
 * 上传文件
 * @param attrs input[type=file]的属性
 * @returns 选择的文件
 */
const uploadFile = async (
  attrs = {} as DeepPartial<Omit<HTMLInputElement, 'type' | 'multiple' | 'style'>>
) => {
  const defaultAttrs = {
    type: 'file',
    style: {
      opacity: '0',
      position: 'fixed',
      pointerEvents: 'none'
    } as Partial<CSSStyleDeclaration>
  }

  attrs = merge(defaultAttrs, attrs)

  const fileInput = createEl('input', attrs)
  document.body.appendChild(fileInput)

  const file = (await new Promise((resolve, reject) => {
    fileInput.onchange = e => {
      const target = e.target as HTMLInputElement
      const file = target.files?.[0]
      if (file) resolve(file)
      else reject(new Error('No file selected'))
    }

    fileInput.onerror = reject

    fileInput.click()
  }).finally(() => fileInput.remove())) as File

  return file
}

export default uploadFile
