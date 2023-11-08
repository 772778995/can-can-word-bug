import { blobToArrayBuffer } from 'blob-util'
import {imageDimensionsFromData} from 'image-dimensions'

/** 获取图片的 File 的宽高 */
const getImgFileInfo = async (file: File) => {
  const arrBuffer = await blobToArrayBuffer(file)
  const uint8Arr = new Uint8Array(arrBuffer)
  const imgInfo = imageDimensionsFromData(uint8Arr)
  if (!imgInfo) throw new Error('Get img info error')
  return imgInfo
}

export default getImgFileInfo