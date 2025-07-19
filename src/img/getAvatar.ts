import Identicon, { IdenticonOptions } from "identicon.js";
import { MD5 } from 'crypto-js';

const getAvatar = (obj: any, opts: IdenticonOptions) => {
  const hash = MD5(obj).toString()
  const avatar = new Identicon(hash, opts)
  return `data:image/png;base64,${avatar}`
}

export default getAvatar