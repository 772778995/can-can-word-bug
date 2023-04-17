import { defineConfig } from 'windicss/helpers'

/**
 * Element Plus 预设
 * @see https://windicss.org/guide/configuration.html#preset
 * @see https://element-plus.org/#/zh-CN/component/custom-theme
 */
const elementProPreset = defineConfig({
  theme: {
    extend: {
      colors: {
        'el-color-white': 'var(--el-color-white)',
        'el-color-black': 'var(--el-color-black)',
        'el-color-primary': 'var(--el-color-primary)',
        'el-color-primary-light-3': 'var(--el-color-primary-light-3)',
        'el-color-primary-light-5': 'var(--el-color-primary-light-5)',
        'el-color-primary-light-7': 'var(--el-color-primary-light-7)',
        'el-color-primary-light-8': 'var(--el-color-primary-light-8)',
        'el-color-primary-light-9': 'var(--el-color-primary-light-9)',
        'el-color-primary-dark-2': 'var(--el-color-primary-dark-2)',
        'el-color-success': 'var(--el-color-success)',
        'el-color-success-light-3': 'var(--el-color-success-light-3)',
        'el-color-success-light-5': 'var(--el-color-success-light-5)',
        'el-color-success-light-7': 'var(--el-color-success-light-7)',
        'el-color-success-light-8': 'var(--el-color-success-light-8)',
        'el-color-success-light-9': 'var(--el-color-success-light-9)',
        'el-color-success-dark-2': 'var(--el-color-success-dark-2)',
        'el-color-warning': 'var(--el-color-warning)',
        'el-color-warning-light-3': 'var(--el-color-warning-light-3)',
        'el-color-warning-light-5': 'var(--el-color-warning-light-5)',
        'el-color-warning-light-7': 'var(--el-color-warning-light-7)',
        'el-color-warning-light-8': 'var(--el-color-warning-light-8)',
        'el-color-warning-light-9': 'var(--el-color-warning-light-9)',
        'el-color-warning-dark-2': 'var(--el-color-warning-dark-2)',
        'el-color-danger': 'var(--el-color-danger)',
        'el-color-danger-light-3': 'var(--el-color-danger-light-3)',
        'el-color-danger-light-5': 'var(--el-color-danger-light-5)',
        'el-color-danger-light-7': 'var(--el-color-danger-light-7)',
        'el-color-danger-light-8': 'var(--el-color-danger-light-8)',
        'el-color-danger-light-9': 'var(--el-color-danger-light-9)',
        'el-color-danger-dark-2': 'var(--el-color-danger-dark-2)',
        'el-color-error': 'var(--el-color-error)',
        'el-color-error-light-3': 'var(--el-color-error-light-3)',
        'el-color-error-light-5': 'var(--el-color-error-light-5)',
        'el-color-error-light-7': 'var(--el-color-error-light-7)',
        'el-color-error-light-8': 'var(--el-color-error-light-8)',
        'el-color-error-light-9': 'var(--el-color-error-light-9)',
        'el-color-error-dark-2': 'var(--el-color-error-dark-2)',
        'el-color-info': 'var(--el-color-info)',
        'el-color-info-light-3': 'var(--el-color-info-light-3)',
        'el-color-info-light-5': 'var(--el-color-info-light-5)',
        'el-color-info-light-7': 'var(--el-color-info-light-7)',
        'el-color-info-light-8': 'var(--el-color-info-light-8)',
        'el-color-info-light-9': 'var(--el-color-info-light-9)',
        'el-color-info-dark-2': 'var(--el-color-info-dark-2)',
        'el-bg-color': 'var(--el-bg-color)',
        'el-bg-color-page': 'var(--el-bg-color-page)',
        'el-bg-color-overlay': 'var(--el-bg-color-overlay)',
        'el-text-color-primary': 'var(--el-text-color-primary)',
        'el-text-color-regular': 'var(--el-text-color-regular)',
        'el-text-color-secondary': 'var(--el-text-color-secondary)',
        'el-text-color-placeholder': 'var(--el-text-color-placeholder)',
        'el-text-color-disabled': 'var(--el-text-color-disabled)',
        'el-border-color': 'var(--el-border-color)',
        'el-border-color-light': 'var(--el-border-color-light)',
        'el-border-color-lighter': 'var(--el-border-color-lighter)',
        'el-border-color-extra-light': 'var(--el-border-color-extra-light)',
        'el-border-color-dark': 'var(--el-border-color-dark)',
        'el-border-color-darker': 'var(--el-border-color-darker)',
        'el-fill-color': 'var(--el-fill-color)',
        'el-fill-color-light': 'var(--el-fill-color-light)',
        'el-fill-color-lighter': 'var(--el-fill-color-lighter)',
        'el-fill-color-extra-light': 'var(--el-fill-color-extra-light)',
        'el-fill-color-dark': 'var(--el-fill-color-dark)',
        'el-fill-color-darker': 'var(--el-fill-color-darker)',
        'el-fill-color-blank': 'var(--el-fill-color-blank)',
        'el-disabled-bg-color': 'var(--el-disabled-bg-color)',
        'el-disabled-text-color': 'var(--el-disabled-text-color)',
        'el-disabled-border-color': 'var(--el-disabled-border-color)',
        'el-overlay-color': 'var(--el-overlay-color)',
        'el-overlay-color-light': 'var(--el-overlay-color-light)',
        'el-overlay-color-lighter': 'var(--el-overlay-color-lighter)',
        'el-mask-color': 'var(--el-mask-color)',
        'el-mask-color-extra-light': 'var(--el-mask-color-extra-light)',
        'el-border-style': 'var(--el-border-style)',
        'el-border-color-hover': 'var(--el-border-color-hover)',
        'el-border': 'var(--el-border)',
        'el-svg-monochrome-grey': 'var(--el-svg-monochrome-grey)'
      },
      boxShadow: {
        'el-box-shadow': 'var(--el-box-shadow)',
        'el-box-shadow-light': 'var(--el-box-shadow-light)',
        'el-box-shadow-lighter': 'var(--el-box-shadow-lighter)',
        'el-box-shadow-dark': 'var(--el-box-shadow-dark)'
      },
      fontSize: {
        'el-component-size-large': 'var(--el-component-size-large)',
        'el-component-size': 'var(--el-component-size)',
        'el-component-size-small': 'var(--el-component-size-small)',
        'el-font-size-extra-large': 'var(--el-font-size-extra-large)',
        'el-font-size-large': 'var(--el-font-size-large)',
        'el-font-size-medium': 'var(--el-font-size-medium)',
        'el-font-size-base': 'var(--el-font-size-base)',
        'el-font-size-small': 'var(--el-font-size-small)',
        'el-font-size-extra-small': 'var(--el-font-size-extra-small)'
      },
      borderRadius: {
        'el-border-radius-base': 'var(--el-border-radius-base)',
        'el-border-radius-small': 'var(--el-border-radius-small)',
        'el-border-radius-round': 'var(--el-border-radius-round)',
        'el-border-radius-circle': 'var(--el-border-radius-circle)'
      },
      borderWidth: {
        'el-border-width': 'var(--el-border-width)'
      },
      lineHeight: {
        'el-font-line-height-primary': 'var(--el-font-line-height-primary)'
      },
      fontFamily: {
        'el-font-family': 'var(--el-font-family)'
      },
      fontWeight: {
        'el-font-weight-primary': 'var(--el-font-weight-primary)'
      },
      transitionTimingFunction: {
        'el-transition-function-ease-in-out-bezier':
          'var(----el-transition-function-ease-in-out-bezier)',
        'el-transition-function-fast-bezier': 'var(----el-transition-function-fast-bezier)',
        'el-transition-all': 'var(----el-transition-all)',
        'el-transition-fade': 'var(----el-transition-fade)',
        'el-transition-md-fade': 'var(----el-transition-md-fade)',
        'el-transition-fade-linear': 'var(----el-transition-fade-linear)',
        'el-transition-border': 'var(----el-transition-border)',
        'el-transition-box-shadow': 'var(----el-transition-box-shadow)',
        'el-transition-color': 'var(----el-transition-color)'
      },
      zIndex: {
        'el-index-normal': 'var(--el-index-normal)',
        'el-index-top': 'var(--el-index-top)',
        'el-index-popper': 'var(--el-index-popper)'
      }
    }
  }
})

export default elementProPreset
