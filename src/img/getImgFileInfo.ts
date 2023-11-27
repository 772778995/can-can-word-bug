import { base64StringToBlob, blobToArrayBuffer } from 'blob-util'
import {imageDimensionsFromData} from 'image-dimensions'

/** 获取图片的的宽高 */
const getImgFileInfo = async (file: Uint8Array | string | Blob) => {
  if (typeof file === 'string') {
    file = base64StringToBlob(file)
  }
  if (file instanceof Blob) {
    const arrBuffer = await blobToArrayBuffer(file)
    file = new Uint8Array(arrBuffer)
  }
  const imgInfo = imageDimensionsFromData(file)
  if (!imgInfo) throw new Error('Get img info error')
  return imgInfo
}

export default getImgFileInfo