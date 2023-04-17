import plugin from 'windicss/plugin'

/**
 * flex 布局插件
 */
const flexPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    '.flex-self-auto': {
      'align-self': 'auto'
    },
    '.flex-self-start': {
      'align-self': 'flex-start'
    },
    '.flex-self-end': {
      'align-self': 'flex-end'
    },
    '.flex-self-center': {
      'align-self': 'center'
    },
    '.flex-self-baseline': {
      'align-self': 'baseline'
    },
    '.flex-self-stretch': {
      'align-self': 'stretch'
    },
    '.flex-center': {
      'align-items': 'center',
      'justify-content': 'center'
    },
    '.flex-justify-center': {
      'justify-content': 'center'
    },
    '.flex-justify-start': {
      'justify-content': 'flex-start'
    },
    '.flex-justify-end': {
      'justify-content': 'flex-end'
    },
    '.flex-justify-between': {
      'justify-content': 'space-between'
    },
    '.flex-justify-around': {
      'justify-content': 'space-around'
    },
    '.flex-justify-evenly': {
      'justify-content': 'space-evenly'
    },
    '.flex-items-center': {
      'align-items': 'center'
    },
    '.flex-items-start': {
      'align-items': 'flex-start'
    },
    '.flex-items-end': {
      'align-items': 'flex-end'
    },
    '.flex-items-between': {
      'align-items': 'space-between'
    },
    '.flex-items-around': {
      'align-items': 'space-around'
    },
    '.flex-items-evenly': {
      'align-items': 'space-evenly'
    }
  })
})

export default flexPlugin
