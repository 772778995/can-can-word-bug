import createEl from '../el/createEl'
import merge from 'lodash/merge'
import zip, { ZipWriterConstructorOptions } from './zip'

/** 文件 */
type TFile = File & { webkitRelativePath: string }

/** 上传文件 */
const uploadFile = (() => {
  let fileInput: HTMLInputElement | null = null
  return async <
    Opts extends {
      /**
       * 指定允许上传的文件类型
       * @example
       * 'audio/*' // 接受所有音频文件 HTML5（支持）
       * 'video/*' // 接受所有视频文件 HTML5（支持）
       * 'image/*' // 接受所有图片文件 HTML5（支持）
       * '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' // 接受所有 MS Doc 文件类型
       * 'image/png' // 等同 '.png'，只接受 png 图片
       * 'image/png, image/jpeg' // 等同 '.png, .jpg, .jpeg'，只接受 PNG 和 JPEG 文件
       */
      accept?: string
      /** 
       * 允许选择多个文件
       * - 当用户所在的平台允许使用 Shift 或者 Control 键时，用户可以选择多个文件
       * - 与 webkitdirectory 二选一
       */
      multiple?: Opts['directory'] extends true ? never : boolean
      /**
       * 指定通过设备（如相机或麦克风）捕获文件的方式
       * - camera：相机
       * - camcorder：摄像机
       * - microphone：麦克风
       * - 以前是一个布尔类型的属性，如果为 true，则请求使用设备的媒体捕获设备（如：摄像机），而不是请求一个文件输入。
       */
      capture?: 'camera' | 'camcorder' | 'microphone' | boolean
      /**
       * 是否上传文件夹
       * - 与 multiple 二选一
       * - Chrome、Safari、Firefox 内核支持
       */
      directory?: Opts['multiple'] extends true ? never : boolean
      /**
       * 获取用户选择的文件的完整路径
       * - Firefox 内核支持
       */
      mozFullPath?: string
      /**
       * 获取用户选择的文件的相对路径
       * - Chrome、Safari 内核支持
       */
      webkitRelativePath?: string
      /**
       * 压缩配置选项
       * @default false
       * @see https://gildas-lormeau.github.io/zip.js/api/interfaces/ZipWriterConstructorOptions.html
       */
      zipOpts?: ZipWriterConstructorOptions | boolean
      /**
       * 限制大小
       * - 单位字节
       * - 在上传多个文件时，限制规则为每一个文件的大小，
       * 如果要限制所有文件总和的大小，将 checkAllFileSize 设置为 true
       */
      maxSize?: number
      /**
       * 限制所有文件字节大小
       * - maxSize 为空则无效
       * @default false
       */
      checkAllFileSize?: boolean
    },
    Res extends Opts['zipOpts'] extends ZipWriterConstructorOptions | true
      ? { fileList: TFile[]; zipFile: Blob }
      : Opts['multiple'] extends true
      ? TFile[]
      : Opts['directory'] extends true
      ? TFile[]
      : TFile
  >(
    /** 配置选项 */
    opts = {} as Opts
  ): Promise<Res> => {
    if (fileInput) {
      fileInput.parentNode?.removeChild(fileInput)
      fileInput = null
    }
    // @ts-ignore
    opts = merge(
      {
        type: 'file',
        mozdirectory: opts.directory,
        webkitdirectory: opts.directory,
        style: {
          position: 'fixed',
          left: '0',
          top: '0',
          opacity: '0',
          pointerEvents: 'none'
        }
      },
      opts
    )
    fileInput = createEl('input', opts as any)
    document.body.appendChild(fileInput)
    fileInput!.dispatchEvent(new MouseEvent('click'))

    /** 是否多选（文件夹也算） */
    const isMultiple = opts.multiple || opts.directory

    const res = await new Promise((resolve, reject) => {
      fileInput!.onchange = async e => {
        const target = e.target as HTMLInputElement
        const files = target.files
        if (!files) return reject(new Error('No file selected'))
        if (!isMultiple && files.length < 1) reject(new Error('No file selected'))
        const fileList = Array.from(files) as TFile[]

        // 如果限制了文件大小
        if (opts.maxSize) {
          // 如果检查所有文件总和大小
          if (opts.checkAllFileSize) {
            const allSize = fileList.reduce((allSize, item) => allSize + item.size, 0)
            if (allSize > opts.maxSize) return reject(new Error('File exceeds limit size'))
          }
          // 否认则检查单个文件大小
          else {
            for (const file of fileList) {
              if (file.size > opts.maxSize) return reject(new Error('File exceeds limit size'))
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

export default uploadFile()
