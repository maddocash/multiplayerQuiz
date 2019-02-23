import React from 'react';
import {storiesOf} from '@storybook/react';
import Lobby from './index.js';
import state from '../../reducers/intitalState.js';

storiesOf('Lobby', module)
  .add('with some props', () => (
    <Lobby
      startQuiz={'this.props.startQuiz'}
      players={state.players}
      readyCheck={'this.props.readyCheck'}
      code={'code'}
      addNewMessage={'props.addNewMessage'}
      messages={[
        {name: 'ash', content: "hey, how's it going?", date: '10:10:13'},
        {name: 'nick', content: 'Sup, ready to lose? lol', date: '10:10:50'}
      ]}
      name={'ash'}
    />
  ))
  .add('with some players', () => (
    <Lobby
      startQuiz={'this.props.startQuiz'}
      players={[
        {
          id: 1,
          name: 'ash',
          color: 'red',
          currentAnswer: '',
          readyCheck: false
        },
        {
          id: 2,
          name: 'nick',
          currentAnswer: '',
          readyCheck: true
        },
        {
          id: 3,
          name: 'nazia',
          color: 'yellow',
          currentAnswer: '',
          readyCheck: false
        }
      ]}
      readyCheck={'this.props.readyCheck'}
      code={'code'}
      addNewMessage={'props.addNewMessage'}
      messages={[
        {name: 'ash', content: "hey, how's it going?", date: '10:10:13'},
        {name: 'nick', content: 'Sup, ready to lose? lol', date: '10:10:50'}
      ]}
      name={'ash'}
    />
  ))
  .add('with some more players', () => (
    <Lobby
      addNewMessage={'props.addNewMessage'}
      messages={[
        {name: 'ash', content: "hey, how's it going?", date: '10:10:13'},
        {name: 'nick', content: 'Sup, ready to lose? lol', date: '10:10:50'}
      ]}
      name={'ash'}
      players={[
        {
          id: 1,
          name: 'ashleigh',
          color: 'red',
          currentAnswer: '',
          readyCheck: false
        },
        {
          id: 2,
          name: 'leigh',
          color: 'green',
          currentAnswer: '',
          readyCheck: false
        },
        {
          id: 3,
          name: 'mog',
          color: 'pink',
          currentAnswer: '',
          readyCheck: false
        },
        {
          id: 4,
          name: 'nick',
          color: 'blue',
          currentAnswer: '',
          readyCheck: false
        },
        {
          id: 5,
          name: 'nazia',
          color: 'orange',
          currentAnswer: '',
          readyCheck: false
        },
        {
          id: 6,
          name: 'pete',
          color: 'aqua',
          currentAnswer: '',
          readyCheck: false
        },
        {
          id: 7,
          name: 'chris',
          color: 'coral',
          currentAnswer: '',
          readyCheck: false
        },
        {
          id: 8,
          name: 'nicola',
          color: 'indigo',
          currentAnswer: '',
          readyCheck: false
        }
      ]}
      readyCheck={'this.props.readyCheck'}
      code={'code'}
    />
  ));
