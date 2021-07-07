import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Docs from './<%= componentName %>.mdx';
import <%= componentName %>, { <%= componentName %>Props } from './index';

export default {
  title: '<%= componentName %>',
  component: <%= componentName %>,
  parameters: {
    docs: {
      page: Docs
    }
  }
} as Meta;

const Template: Story<<%= componentName %>Props> = (args) => <<%= componentName %> {...args} />;

export const Default = Template.bind({});
Default.args = {};

