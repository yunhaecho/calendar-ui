import type { Meta, StoryObj } from '@storybook/react'

import Calendar from './Calendar'
const meta: Meta<typeof Calendar> = {
  title: 'Calendar',
  component: Calendar,
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  render: () => (
    <Calendar
      style="w-550"
      mockdata={[
        {
          id: '1',
          date: '2026-04-09',
          label: 'meeting',
          color: 'primary',
        },
        {
          id: '2',
          date: '2026-04-10',
          label: 'holiday',
          color: 'green',
        },
        {
          id: '4',
          date: '2026-04-25',
          label: 'pilates',
          color: 'blue',
        },
      ]}
    />
  ),
}

export const lg: Story = {
  render: () => (
    <Calendar
      style="w-700"
      mockdata={[
        {
          id: '1',
          date: '2026-04-09',
          label: 'meeting',
          color: 'primary',
        },
        {
          id: '2',
          date: '2026-04-10',
          label: 'holiday',
          color: 'green',
        },
        {
          id: '4',
          date: '2026-04-25',
          label: 'pilates',
          color: 'blue',
        },
      ]}
    />
  ),
}
