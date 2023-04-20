import createEl from '../el/createEl'
import DeepPartial from '../types/DeepPartial'
import merge from 'lodash/merge'
import JsZip from 'jszip'

type TFile = File & { webkitRelativePath: string }
type JsZipGenOpts = JsZip.JSZipGeneratorOptions
type ZipOpts = JsZipGenOpts | boolean

/**
 * 上传文件
 * @returns 选择的文件
 */
const uploadFile = (() => {
  const fileInput = createEl('input', {
    type: 'file',
    style: {
      opacity: '0',
      position: 'fixed',
      pointerEvents: 'none',
    }
  })
  document.body.appendChild(fileInput)
  return async <
    Attrs extends DeepPartial<Omit<HTMLInputElement, 'type' | 'style'>> & { webkitdirectory?: boolean },
    Opts extends {
      /** JsZip 参数，true 则为 { type: 'blob' } ，false 则不压缩，默认为 false */
      zipOpts?: ZipOpts
    },
    Res extends Opts['zipOpts'] extends true | JsZipGenOpts ? string | Blob | number[] | Uint8Array | ArrayBuffer | Buffer :
    Attrs['multiple'] extends true
    ? TFile[]
    : Attrs['webkitdirectory'] extends true
    ? TFile[]
    : TFile,
  >(
    /** input[type=file]的属性 */
    attrs = {} as Attrs,
    /** 其他配置 */
    opts = { zipOpts: false } as Opts
  ): Promise<Res> => {
    fileInput.value = ''
    merge(fileInput, attrs)
    fileInput.dispatchEvent(new MouseEvent('click'))
    const { zipOpts } = merge({ zip: false }, opts)
    const res = (await new Promise((resolve, reject) => {
      fileInput.onchange = async e => {
        const isMultiple = [attrs.multiple, attrs.webkitdirectory].includes(true)
        const target = e.target as HTMLInputElement
        const files = target.files
        if (!files) return reject(new Error('No file selected'))
        if (!isMultiple && files.length < 1) reject(new Error('No file selected'))
        const fileList = [...files as unknown as TFile[]]

        if (zipOpts) {
          const jsZip = new JsZip()
          const loadFilePromiseList = fileList.map(async (file) => {
            const fileReader = new FileReader()
            await new Promise((resolve, reject) => {
              fileReader.onload = () => {
                if (!fileReader.result) return reject('Fail to read file')
                jsZip.file(file.name, fileReader.result)
                resolve(true)
              }
              fileReader.readAsArrayBuffer(file)
            })
          })
          await Promise.all(loadFilePromiseList)
          const res = await jsZip.generateAsync(zipOpts === true ? { type: 'blob' } : zipOpts)
          return resolve(res)
        }

        if (isMultiple) return resolve(fileList)
        if (!isMultiple) return resolve(fileList[0])
      }

      fileInput.onerror = reject
    }))

    return res as Res
  }
})()

export default uploadFile
