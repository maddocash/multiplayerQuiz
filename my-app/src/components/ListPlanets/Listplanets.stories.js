import React from 'react';
import {storiesOf} from '@storybook/react';
import ListPlanets from './index.js';
import state from '../../reducers/intitalState.js';

storiesOf('List Planets', module).add('ListPlanets page', () => (
  <ListPlanets
    categories={state.categories}
    fetchData={'this.props.fetchData'}
  />
));
