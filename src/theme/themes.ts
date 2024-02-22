import { createTheme } from '@stylexjs/stylex'
import { colors } from '@theme/tokens.stylex'

const DARK = '@media (prefers-color-scheme: dark)'

export const myTheme = createTheme(colors, {
  defaultText: { default: colors.gray120, [DARK]: '#FCFCFD' },
  secondaryText: { default: colors.gray100, [DARK]: '#F6F7F9' },
  accent: { default: colors.blue120, [DARK]: '#96C9FF' },
})
