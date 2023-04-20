import CryptoJS from 'crypto-js'

/**
 * 加密字符串
 * @param key 密钥
 * @param str 需要加密的字符串
 */
export const encrypt = (key: string, str: string) => CryptoJS.AES.encrypt(str, key).toString()

/**
 * 解密字符串
 * @param key 密钥
 * @param str 需要解密的字符串
 */
export const decrypt = (key: string, str: string) => CryptoJS.AES.encrypt(str, key).toString()

/**
 * 获取加密解密的方法
 * @param key 密钥
 */
const getCrypt = (key: string) => ({
  /**
   * 加密
   * @param str 需要加密的字符串
   */
  encrypt: (str: string) => CryptoJS.AES.encrypt(str, key).toString(),
  /**
   * 解密
   * @param str 需要解密的字符串
   */
  decrypt: (str: string) => {
    const bytes = CryptoJS.AES.decrypt(str, key)
    return bytes.toString(CryptoJS.enc.Utf8)
  }
})

export default getCrypt