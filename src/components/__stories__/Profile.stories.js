import React from 'react';
import { Profile } from '../pages/Profile';
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
  title: 'Pages/Profile',
  component: Profile,
  decorators: [(Story) => withReduxAndRouter(dummyProfileData)(Story)],
};

const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {};