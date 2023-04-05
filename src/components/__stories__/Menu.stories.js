import React from 'react';
import { Menu } from '../organisms/Menu';
import { withReduxAndRouter } from '../../storybookProviders';

const dummyProfileData = {
    auth: {
      isAuthenticated: true,
      profile: {
        name: 'John Doe',
        imageUrl: 'https://i.pravatar.cc/300',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    },
  };

export default {
  title: 'Organisms/Menu',
  component: Menu,
  decorators: [(Story) => withReduxAndRouter(dummyProfileData)(Story)],
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {};