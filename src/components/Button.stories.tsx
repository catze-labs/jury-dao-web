import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);
export const Default = Template.bind({});
