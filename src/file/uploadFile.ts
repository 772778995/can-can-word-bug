import createEl from '../el/createEl'
import DeepPartial from '../types/DeepPartial'
import merge from 'lodash/merge'

/**
 * 上传文件
 * @param attrs input[type=file]的属性
 * @returns 选择的文件
 */
const uploadFile = (() => {
  const fileInput = createEl('input', {
    style: {
      opacity: '0',
      position: 'fixed',
      pointerEvents: 'none',
    }
  })
  document.body.appendChild(fileInput)
  return async <
    Attrs extends DeepPartial<Omit<HTMLInputElement, 'type' | 'style'>> & { webkitdirectory?: boolean },
    Res extends Attrs['multiple'] extends true
    ? File[]
    : Attrs['webkitdirectory'] extends true
    ? File[]
    : File
  >(
    attrs = {} as Attrs
  ): Promise<Res> => {
    merge(fileInput, attrs)
    const res = (await new Promise((resolve, reject) => {
      fileInput.onchange = e => {
        const target = e.target as HTMLInputElement
        const files = target.files
        if (files) {
          if ([attrs.multiple, attrs.webkitdirectory].includes(true)) resolve([...((files as unknown) as File[])])
          else resolve(files[0] as File)
        } else reject(new Error('No file selected'))
      }
      fileInput.onerror = reject
      fileInput.dispatchEvent(new MouseEvent('click'))
    }))

    return res as Res
  }
})()

export default uploadFile
