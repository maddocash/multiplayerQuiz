import React from 'react';
import {storiesOf} from '@storybook/react';
import FinalScoreBoard from './index.js';

storiesOf('FinalScoreBoard', module)
  .add('FinalScoreBoard', () => (
    <FinalScoreBoard
      results={{}}
      addNewMessage={'props.addNewMessage'}
      messages={[
        {name: 'ash', content: "hey, how's it going?", date: '10:10:13'},
        {name: 'nick', content: 'Sup, ready to lose? lol', date: '10:10:50'}
      ]}
      name={'ash'}
    />
  ))
  .add('FinalScoreBoard with players', () => (
    <FinalScoreBoard
      results={{Ash: 10, Nick: 15}}
      addNewMessage={'props.addNewMessage'}
      messages={[
        {name: 'ash', content: "hey, how's it going?", date: '10:10:13'},
        {name: 'nick', content: 'Sup, ready to lose? lol', date: '10:10:50'}
      ]}
      name={'ash'}
    />
  ));
