/**
 * 获取 UUID
 * @example
 * getUUID() // b250d159-e1b6-4a87-9002-885d90033be3
 */
const getUUID = () => {
  const tempURL = URL.createObjectURL(new Blob())
  const uuid = tempURL.toString()
  URL.revokeObjectURL(tempURL)
  return uuid.substr(uuid.lastIndexOf('/') + 1)
}

export default getUUID
