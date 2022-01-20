import { Meta, Story } from '@storybook/react/types-6-0'
import { CardHowWeAre } from '../src/components/CardHowWeAre'

export default {
  title: 'CardHowWeAre',
  component: CardHowWeAre
} as Meta

const Template: Story = ({ name, photo, role, description, socialLinks }) => (
  <CardHowWeAre
    name={name}
    photo={photo}
    role={role}
    description={description}
    socialLinks={socialLinks}
  />
)

export const Default = Template.bind({})
Default.args = {
  name: 'Swanny ',
  photo: {
    url: 'https://media-exp1.licdn.com/dms/image/C4E03AQG06GnvhQmJ_A/profile-displayphoto-shrink_200_200/0/1641990065320?e=1648080000&v=beta&t=IzKMeXPcBscxKXzpto0rzmfKT8uHIp5WXLS66tklWtc',
    alternativeText: 'Swanny'
  },
  role: 'Frontend Developer',
  description:
    'Oi, eu sou a Swanny, no capitulo anterior aprendemos algo e hoje iremos aprender algo mais',
  socialLinks: [
    { url: 'https://www.instagram.com/swannykathllen/', title: 'instagram' },
    { url: 'https://github.com/SwannyAlves', title: 'github' },
    { url: 'https://www.linkedin.com/in/swanny-alves/', title: 'linkedin' }
  ]
}
