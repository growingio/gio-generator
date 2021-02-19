import React from 'react';
import Docs from './<%= componentName %>.mdx';
import { <%= componentName %> } from './index';

export default {
  component:  <%= componentName %>,
  parameters: {
    docs: {
      page: Docs
    }
  }
}