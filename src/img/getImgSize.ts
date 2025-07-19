import axios from 'axios'
import { base64StringToBlob, blobToArrayBuffer } from 'blob-util'
import { imageMeta as getImageMeta } from 'image-meta'
import { isBase64, isURL } from 'validator'


/**
 * 获取图片的的宽高
 * @example
 * import { uploadFile, getImgMeta } from 'can-can-word-bug'
 *
 * document.onclick = async () => {
 *   const file = await uploadFile({ accept: 'image/*' })
 *   const imgMeta = await getImgMeta(file)
 *   console.log(imgMeta)
 * }
 */
const getImgMeta = async (file: Uint8Array | string | Blob | ArrayBuffer | Buffer | File) => {
  if (typeof file === 'string') {
    if (isBase64(file)) file = base64StringToBlob(file)
    else {
      if (isURL(file)) {
        const res = await axios.get(file, { responseType: 'arraybuffer' })
        file = res.data.data
      } else {
        throw new Error('当 file 类型为字符串时必须是 url 或 base64 格式')
      }
    }
  }
  if (file instanceof File) {
    file = await file.arrayBuffer()
  }
  if (file instanceof Blob) {
    file = await blobToArrayBuffer(file)
  }
  if (file instanceof ArrayBuffer || file instanceof Buffer) {
    file = new Uint8Array(file.slice(0, 24))
  }
  const imgMeta = getImageMeta(file as Uint8Array)
  if (!imgMeta) throw new Error('获取图片元数据失败')
  return imgMeta
}

export default getImgMeta
