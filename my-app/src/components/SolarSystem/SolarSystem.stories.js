import React from 'react';
import {storiesOf} from '@storybook/react';
import SolarSystem from './index.js';
import state from '../../reducers/intitalState.js';

storiesOf('Solar System', module).add('SolarSystem page', () => (
  <SolarSystem
    categories={state.categories}
    fetchData={'this.props.fetchData'}
    addNewMessage={'props.addNewMessage'}
    messages={[
      {name: 'ash', content: "hey, how's it going?", date: '10:10:13'},
      {name: 'nick', content: 'Sup, ready to lose? lol', date: '10:10:50'}
    ]}
    name={'ash'}
  />
));
