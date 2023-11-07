import createEl from '../el/createEl'
import DeepPartial from '../types/DeepPartial'
import merge from 'lodash/merge'
import zip, { ZipWriterConstructorOptions } from './zip'

/** 文件 */
type TFile = File & { webkitRelativePath: string }

/**
 * 上传文件
 * @returns 选择的文件
 */
const uploadFile = (() => {
  let fileInput: HTMLInputElement | null = null
  return async <
    Attrs extends DeepPartial<Omit<HTMLInputElement, 'type' | 'style'>> & {
      /** 是否上传文件夹（multiple 二选一） */
      webkitdirectory?: Attrs['multiple'] extends true ? never : boolean
      /** 是否多选 （webkitdirectory 二选一） */
      multiple?: Attrs['webkitdirectory'] extends true ? never : boolean
    },
    Opts extends {
      /**
       * 压缩配置选项
       * @default false
       * @see https://gildas-lormeau.github.io/zip.js/api/interfaces/ZipWriterConstructorOptions.html
       */
      zipOpts?: ZipWriterConstructorOptions | boolean
      /**
       * 限制大小
       * - 单位字节
       * - 在上传多个文件时，限制规则为每一个文件的字节大小，
       * 如果要限制所有文件字节大小，将 checkAllFileSize 设置为 true
       */
      size?: number
      /**
       * 限制所有文件字节大小
       * - size 为空则无效
       * @default false
       */
      checkAllFileSize?: boolean
    },
    Res extends Opts['zipOpts'] extends ZipWriterConstructorOptions | true
      ? { fileList: TFile[]; zipFile: Blob }
      : Attrs['multiple'] extends true
      ? TFile[]
      : Attrs['webkitdirectory'] extends true
      ? TFile[]
      : TFile
  >(
    /**
     * input[type="file"] 的属性
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement
     */
    attrs = {} as Attrs,
    /** 其他配置 */
    opts = {} as Opts
  ): Promise<Res> => {
    if (fileInput) {
      fileInput.parentNode?.removeChild(fileInput)
      fileInput = null
    }
    // @ts-ignore
    attrs = merge(
      {
        type: 'file',
        style: {
          position: 'fixed',
          left: '0',
          top: '0',
          opacity: '0',
          pointerEvents: 'none'
        }
      } as HTMLInputElement,
      attrs
    )
    fileInput = createEl('input', attrs)
    document.body.appendChild(fileInput)
    fileInput!.dispatchEvent(new MouseEvent('click'))

    /** 是否多选（文件夹也算） */
    const isMultiple = attrs.multiple || attrs.webkitdirectory

    const res = await new Promise((resolve, reject) => {
      fileInput!.onchange = async e => {
        const target = e.target as HTMLInputElement
        const files = target.files
        if (!files) return reject(new Error('No file selected'))
        if (!isMultiple && files.length < 1) reject(new Error('No file selected'))
        const fileList = Array.from(files) as TFile[]

        // 如果限制了文件大小
        if (opts.size) {
          // 如果检查所有文件总和大小
          if (opts.checkAllFileSize) {
            const allSize = fileList.reduce((allSize, item) => allSize + item.size, 0)
            if (allSize > opts.size) return reject(new Error('File exceeds limit size'))
          }
          // 否认则检查单个文件大小
          else {
            for (const file of fileList) {
              if (file.size > opts.size) return reject(new Error('File exceeds limit size'))
            }
          }
        }

        // 如果开启了压缩
        let { zipOpts } = opts
        if (zipOpts === true) zipOpts = {} as ZipWriterConstructorOptions
        if (zipOpts) {
          const zipFile = await zip(fileList)
          return resolve({ fileList, zipFile })
        }

        if (isMultiple) return resolve(fileList)
        if (!isMultiple) return resolve(fileList[0])
      }

      fileInput!.onerror = reject
    })

    return res as Res
  }
})()

export default uploadFile
