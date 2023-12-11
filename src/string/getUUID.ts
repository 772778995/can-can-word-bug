/**
 * 获取 UUID
 * @example
 * getUUID() // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 */
const getUUID = () => {
  const tempURL = URL.createObjectURL(new Blob())
  const uuid = tempURL.toString()
  URL.revokeObjectURL(tempURL)
  return uuid.match(/(\w|\d)+-.+/)![0]
}

export default getUUID
