import React from 'react';
import { withReduxAndRouter } from '../../../storybookProviders';

import { Login } from './Login';

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
  title: 'Organisms/Auth/Login',
  component: Login,
  decorators: [(Story) => withReduxAndRouter(dummyProfileData)(Story)],
  tags: ['autodocs'],
};

export const Default = {};
