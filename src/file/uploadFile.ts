import createEl from '../el/createEl'
import DeepPartial from '../types/DeepPartial'
import merge from 'lodash/merge'

/**
 * 上传文件
 * @param attrs input[type=file]的属性
 * @returns 选择的文件
 */
const uploadFile = async <
  Attrs extends DeepPartial<Omit<HTMLInputElement, 'type' | 'style'>> & { webkitdirectory?: boolean },
  Res extends Attrs['multiple'] extends true
  ? File[]
  : Attrs['webkitdirectory'] extends true
  ? File[]
  : File
>(
  attrs = {} as Attrs
): Promise<Res> => {
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

  const res = (await new Promise((resolve, reject) => {
    fileInput.onchange = e => {
      const target = e.target as HTMLInputElement
      const files = target.files
      if (files) {
        if ([attrs.multiple, attrs.webkitdirectory].includes(true)) resolve([...((files as unknown) as File[])])
        else resolve(files[0] as File)
      } else reject(new Error('No file selected'))
    }

    const interval = setInterval(() => {
      if (!fileInput.value) {
        clearInterval(interval)
        reject(new Error('File upload canceled'))
      }
    }, 100)

    fileInput.onerror = reject

    fileInput.dispatchEvent(new MouseEvent('click'))
  }).finally(() => fileInput.parentNode?.removeChild(fileInput))) as Res

  return res
}

export default uploadFile
