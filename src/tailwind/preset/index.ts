import flexPlugin from '../plugin/flex'
import lineClampPlugin from '../plugin/lineClamp'
import { FullConfig } from 'windicss/types/interfaces'

const defaultConfig: FullConfig = {
  preflight: false,
  prefix: 'w-',
  attributify: {
    prefix: '_'
  },
  plugins: [flexPlugin, lineClampPlugin]
}

export default defaultConfig
