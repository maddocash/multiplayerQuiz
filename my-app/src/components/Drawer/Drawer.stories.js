import React from 'react';
import {storiesOf} from '@storybook/react';
import Drawer from './index.js';

storiesOf('Drawer', module)
  .add('drawer', () => (
    <Drawer
      results={{}}
      planetsScore={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
    />
  ))
  .add('drawer with players', () => (
    <Drawer
      results={{Ash: 10, Nick: 15}}
      planetsScore={[
        {Ash: 1, Nick: 4, Nazia: 2},
        {Ash: 1, Nick: 4, Nazia: 2, Bob: 1},
        {Ash: 5, Nazia: 2},
        {Ash: 3, Nick: 2, Nazia: 2},
        {Nick: 5, Nazia: 2},
        {Ash: 1, Nick: 4, Nazia: 2},
        {Ash: 1, Nick: 4, Nazia: 2},
        {Ash: 5, Nazia: 2},
        {Ash: 3, Nick: 2, Nazia: 2},
        {Nick: 5, Nazia: 2},
        {Ash: 5, Nazia: 2},
        {Ash: 3, Nick: 2, Nazia: 2},
        {Nick: 5, Nazia: 2}
      ]}
    />
  ));
