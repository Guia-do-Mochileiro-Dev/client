import MediaMatch from 'components/MediaMatch'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
)
export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
