import createEl from '../el/createEl'
import DeepPartial from '../types/DeepPartial'
import merge from 'lodash/merge'
import JsZip, { OutputType } from 'jszip'

type TFile = File & { webkitRelativePath: string }

/**
 * 上传文件
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
    ZipOpts extends JsZip.JSZipGeneratorOptions<OutputType> | boolean,
    Opts extends {
      /** JsZip 参数，true 则为默认参数，false 则不压缩，默认为 false */
      zipOpts?: ZipOpts
    },
    Res extends Opts['zipOpts'] extends true | ZipOpts ? string | Blob | number[] | Uint8Array | ArrayBuffer | Buffer :
    Attrs['multiple'] extends true
    ? TFile[]
    : Attrs['webkitdirectory'] extends true
    ? TFile[]
    : TFile,
  >(
    /** input[type=file]的属性 */
    attrs = {} as Attrs,
    /** 其他配置 */
    opts = {} as Opts
  ): Promise<Res> => {
    merge(fileInput, attrs)
    const { zipOpts } = merge({ zip: false }, opts)

    const res = (await new Promise((resolve, reject) => {
      fileInput.onchange = async e => {
        const isMultiple = [attrs.multiple, attrs.webkitdirectory].includes(true)
        const target = e.target as HTMLInputElement
        const files = [target.files]
        if (!files) return reject(new Error('No file selected'))
        if (!isMultiple && files.length < 1) reject(new Error('No file selected'))
        const fileList = [...files] as unknown as TFile[]

        if (zipOpts) {
          const jsZip = new JsZip()
          for (const file of fileList) jsZip.file(file.webkitRelativePath, file)
          const res = await jsZip.generateAsync(zipOpts === true ? {} : zipOpts)
          return resolve(res)
        }

        if (isMultiple) return resolve(fileList)
        if (!isMultiple) return resolve(fileList[0])
      }

      fileInput.onerror = reject
      fileInput.dispatchEvent(new MouseEvent('click'))
    }))

    return res as Res
  }
})()

export default uploadFile
