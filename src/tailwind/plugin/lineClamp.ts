import plugin from 'windicss/plugin'

/**
 * 溢出隐藏插件
 */
const lineClampPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    '.line-clamp-1, .line-clamp-2, .line-clamp-3, .line-clamp-4, .line-clamp-5, .line-clamp-6, .line-clamp-7': {
      overflow: 'hidden'
    },
    '.line-clamp-1': {
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap'
    },
    '.line-clamp-2, .line-clamp-3, .line-clamp-4, .line-clamp-5, .line-clamp-6, .line-clamp-7': {
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical'
    },
    '.line-clamp-2': {
      '-webkit-line-clamp': '2'
    },
    '.line-clamp-3': {
      '-webkit-line-clamp': '3'
    },
    '.line-clamp-4': {
      '-webkit-line-clamp': '4'
    },
    '.line-clamp-5': {
      '-webkit-line-clamp': '5'
    },
    '.line-clamp-6': {
      '-webkit-line-clamp': '6'
    },
    '.line-clamp-7': {
      '-webkit-line-clamp': '7'
    }
  })
})

export default lineClampPlugin
