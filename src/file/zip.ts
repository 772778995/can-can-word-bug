import { BlobReader, BlobWriter, ZipWriter, ZipWriterConstructorOptions } from '@zip.js/zip.js'
import mime from 'mime'

export { ZipWriterConstructorOptions }

/** 压缩文件 */
const zip = async (
  /** 要压缩的文件 */
  files: File | File[],
  /**
   * 配置选项
   * @see https://gildas-lormeau.github.io/zip.js/api/interfaces/ZipWriterConstructorOptions.html
   */
  opts?: ZipWriterConstructorOptions
) => {
  const zipFileWriter = new BlobWriter(mime.getType('zip')!)
  const zipWriter = new ZipWriter(zipFileWriter, opts)
  if (files instanceof File) files = [files]
  for (const file of files) {
    const blobReader = new BlobReader(file)
    zipWriter.add(file.name, blobReader)
  }
  zipWriter.close()
  return await zipFileWriter.getData()
}

export default zip