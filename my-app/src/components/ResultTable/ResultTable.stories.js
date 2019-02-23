import React from 'react';
import {storiesOf} from '@storybook/react';
import Results from './index.js';

storiesOf('Results', module)
  .add('without props', () => <Results />)
  .add('with some props', () => <Results players={{Ash: 12, Nick: 15}} />);
