import React from 'react';
import {storiesOf} from '@storybook/react';
import StartGame from './index.js';

storiesOf('StartGame', module).add('with some props', () => (
  <StartGame create={'() => create page'} join={'() => join page'} />
));
