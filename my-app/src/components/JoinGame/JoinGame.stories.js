import React from 'react';
import {storiesOf} from '@storybook/react';
import JoinGame from './index.js';

storiesOf('Join Game', module).add('with some props', () => (
  <JoinGame joinLobby={'() => joinLobby'} id={'this.props.id'} />
));
