import React from 'react';
import {storiesOf} from '@storybook/react';
import CreateGame from './index.js';

storiesOf('Create Game', module).add('with some props', () => (
  <CreateGame joinLobby={'() => joinLobby'} id={'this.props.id'} />
));
