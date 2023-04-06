import React from 'react';

import { Button } from './Button';

export default {
  title: 'Attoms/Button',
  component: Button,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Main',
  },
};

export const NotPrimary = {
  args: {
    primary: false,
    label: 'Not important',
  },
};