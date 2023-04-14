import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Logo, { LogoProps } from './Logo';

export default {
  title: 'Logo',
  component: Logo,
} as Meta<LogoProps>;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;
export const Default = Template.bind({});
