import * as stylex from '@stylexjs/stylex'

export const colors = stylex.defineVars({
  defaultText: '',
  secondaryText: '',
  accent: '',
  blue120: '#3840A9',
  gray100: '#344054',
  gray120: '#101828',
})

export const fonts = stylex.defineVars({
  primary: 'Lato, sans-serif'
})

export const fontSizes = stylex.defineVars({
  text1: '0.5rem',   // 8px
  text2: '0.75rem',  // 12px
  text3: '0.875rem', // 14px
  text4: '1rem',     // 16px
  text5: '1.125rem', // 18px
  text6: '1.25rem',  // 20px
  text7: '1.5rem',   // 24px
  text8: '2rem',     // 32px
  text9: '3.75rem',  // 60px
})

export const fontWeights = stylex.defineVars({
  thin: '100',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
})

export const lineHeights = stylex.defineVars({
  height10: '1.25',   // 20px
  height20: '1.5rem', // 24px
})
