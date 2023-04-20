import createEl from '../el/createEl'
import DeepPartial from '../types/DeepPartial'
import { encrypt } from '../string/getCrypto'
import merge from 'lodash/merge'
import JsZip from 'jszip'

/** 文件 */
type TFile = File & { webkitRelativePath: string }
type JsZipGenOpts = JsZip.JSZipGeneratorOptions & {
  /** 密钥，为空则不加密。默认为空，仅支持压缩包加密 */
  encrypt?: string
}
type ZipOpts = JsZipGenOpts | boolean
type ZipRes<T> = { zipFile: T, fileList: TFile[] }

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
       * JsZip 生成压缩包的参数，true 则为 { type: 'blob' } ，false 则不压缩。默认为 false
       * @see https://stuk.github.io/jszip/
       */
      zipOpts?: ZipOpts,
    },
    Res extends Opts['zipOpts'] extends true
    ? ZipRes<Blob>
    : Opts['zipOpts'] extends JsZipGenOpts
    ? Opts['zipOpts']['type'] extends 'array' ? ZipRes<Array<number>[]>
    : Opts['zipOpts']['type'] extends 'arraybuffer' ? ZipRes<ArrayBuffer>
    : Opts['zipOpts']['type'] extends 'base64' | 'binarystring' | 'string' ? ZipRes<string>
    : Opts['zipOpts']['type'] extends 'blob' ? ZipRes<Blob>
    : Opts['zipOpts']['type'] extends 'nodebuffer' ? ZipRes<Buffer>
    : Opts['zipOpts']['type'] extends 'uint8array' ? ZipRes<Uint8Array>
    : ZipRes<Blob>

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
    opts = { zipOpts: false } as Opts
  ): Promise<Res> => {
    if (fileInput) {
      fileInput.parentNode?.removeChild(fileInput)
      fileInput = null
    }
    attrs = merge({
      type: 'file',
      style: {
        opacity: '0',
        position: 'fixed',
        pointerEvents: 'none',
      },
    } as HTMLInputElement, attrs)
    fileInput = createEl('input', attrs)
    document.body.appendChild(fileInput)
    fileInput!.dispatchEvent(new MouseEvent('click'))
    const { zipOpts: _zipOpts } = merge({ zip: false }, opts)
    const zipOpts = (_zipOpts === true ? { type: 'blob' } : _zipOpts) as JsZipGenOpts
    if (zipOpts && !zipOpts.type) zipOpts.type = 'blob'

    /** 是否多选（文件夹也算） */
    const isMultiple = attrs.multiple || attrs.webkitdirectory

    const res = (await new Promise((resolve, reject) => {
      fileInput!.onchange = async e => {
        const target = e.target as HTMLInputElement
        const files = target.files
        if (!files) return reject(new Error('No file selected'))
        if (!isMultiple && files.length < 1) reject(new Error('No file selected'))
        const fileList = Array.from(files) as TFile[]

        if (zipOpts) {
          const jsZip = new JsZip()
          const loadFilePromiseList = fileList.map(async (file) => {
            const fileReader = new FileReader()
            await new Promise((resolve, reject) => {
              fileReader.onload = () => {
                if (!fileReader.result) return reject('Fail to read file')
                let fileRes = fileReader.result
                if (zipOpts.encrypt) fileRes = encrypt(zipOpts.encrypt, fileRes as string)
                jsZip.file(file.name, fileRes)
                resolve(true)
              }
              if (zipOpts.encrypt) fileReader.readAsDataURL(file)
              else fileReader.readAsArrayBuffer(file)
            })
          })
          await Promise.all(loadFilePromiseList)
          const zipFile = await jsZip.generateAsync(zipOpts)
          return resolve({ fileList, zipFile })
        }

        if (isMultiple) return resolve(fileList)
        if (!isMultiple) return resolve(fileList[0])
      }

      fileInput!.onerror = reject
    }))

    return res as Res
  }
})()

export default uploadFile