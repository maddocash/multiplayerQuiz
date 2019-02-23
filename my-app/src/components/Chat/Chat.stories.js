import React from 'react';
import {storiesOf} from '@storybook/react';
import Chat from './index.js';

storiesOf('Chat', module)
  .add('Chat', () => (
    <Chat addNewMessage={'props.addNewMessage'} messages={[]} name={'ash'} />
  ))
  .add('the start of a conversation', () => (
    <Chat
      addNewMessage={'props.addNewMessage'}
      messages={[
        {name: 'ash', content: "hey, how's it going?", date: '10:10:13'},
        {name: 'nick', content: 'Sup, ready to lose? lol', date: '10:10:50'}
      ]}
      name={'ash'}
    />
  ))
  .add('a longer conversation', () => (
    <Chat
      addNewMessage={'props.addNewMessage'}
      messages={[
        {
          name: 'ash',
          content: " hey, how's it going?",
          date: '7:32:06 AM'
        },
        {
          name: 'nick',
          content: ' sup, ready to lose? lol',
          date: '7:32:26 AM'
        },
        {
          name: 'ash',
          content: 'you wish... first round it general knowledge ',
          date: '7:33:16 AM'
        },
        {
          name: 'ash',
          content: ' good luck :)',
          date: '7:33:33 AM'
        },
        {
          name: 'nick',
          content: ' none needed mate',
          date: '7:34:24 AM'
        },
        {
          name: 'ash',
          content: ' any idea where nazia is?',
          date: '7:34:52 AM'
        },
        {
          name: 'nick',
          content: ' no, let just have a quick game whilst we wait :)',
          date: '7:35:30 AM'
        }
      ]}
      name={'ash'}
    />
  ));
