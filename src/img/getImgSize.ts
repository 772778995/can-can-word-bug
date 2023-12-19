import { base64StringToBlob, blobToArrayBuffer } from 'blob-util'
import { imageDimensionsFromData } from 'image-dimensions'

/**
 * 获取图片的的宽高
 * @example
 * import { uploadFile, getImgSize } from 'can-can-word-bug'
 *
 * document.onclick = async () => {
 *   const file = await uploadFile({ accept: 'image/*' })
 *   const size = await getImgSize(file)
 *   console.log(size) // { width: 100, height: 100 }
 * }
 */
const getImgSize = async (file: Uint8Array | string | Blob) => {
  if (typeof file === 'string') {
    file = base64StringToBlob(file)
  }
  if (file instanceof Blob) {
    const arrBuffer = await blobToArrayBuffer(file)
    file = new Uint8Array(arrBuffer)
  }
  const imgSize = imageDimensionsFromData(file)
  if (!imgSize) throw new Error('Get img info error')
  return imgSize
}

export default getImgSize
