import { ReactNode } from 'react'
import * as stylex from '@stylexjs/stylex'
import { colors, fonts, fontSizes, lineHeights } from '@theme/tokens.stylex.ts'
import { myTheme } from '@theme/themes'

export interface ParagraphProp {
  children?: ReactNode,
  size?: 'small' | 'standard' | 'large' | 'huge',
}

function Paragraph({children, size = 'standard', ...props}: ParagraphProp) {
  return (
    <p {...stylex.props(
      myTheme,
      styles.base(),
      styles[size](),
      {...props}
    )}>
      {children}
    </p>
  )
}

export default Paragraph

const styles = stylex.create({
  base: () => ({
    fontSize: fontSizes.text4,
    fontFamily: fonts.primary,
    lineHeight: lineHeights.height20,
    margin: 0,
    color: colors.defaultText
  }),

  small: () => ({
    fontSize: fontSizes.text1,
  }),

  standard: () => ({
    fontSize: fontSizes.text4,
  }),

  large: () => ({
    fontSize: fontSizes.text7,
  }),

  huge: () => ({
    fontSize: fontSizes.text8,
  }),
})
