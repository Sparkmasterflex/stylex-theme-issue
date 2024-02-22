import type { Meta, StoryObj } from '@storybook/react'

import { fontSizes } from '@theme/tokens.stylex.ts'
import Paragraph from '../paragraph'

const meta = {
  title: 'Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Text within component',
      type: 'string',
      required: true // find out why we're not getting red asterisk
    },
    size: {
      options: [Object.keys(fontSizes)],
      description: 'Size of text',
      type: 'string',
    },
  }
} satisfies Meta<typeof Paragraph>

export default meta
type Story = StoryObj<typeof meta>;

export const ParagraphText: Story = {
  args: {
    children: 'yope',
  },
  argTypes: {
    size: {
      options: Object.keys(fontSizes),
      control: {type: 'select'}
    },
  }
}
