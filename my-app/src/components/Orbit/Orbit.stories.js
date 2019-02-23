import React from 'react';
import {storiesOf} from '@storybook/react';
import Orbit from './index.js';
import state from '../../reducers/intitalState.js';

storiesOf('Orbit', module)
  .add('Outer Orbit', () => (
    <Orbit
      className="outerOrbit"
      planets={[8, 9, 10, 11, 12]}
      categories={state.categories}
      fetchData={'props.fetchData'}
    />
  ))
  .add('Middle Orbit', () => (
    <Orbit
      className="centralOrbit"
      planets={[4, 5, 6, 7]}
      categories={state.categories}
      fetchData={'props.fetchData'}
    />
  ))
  .add('Inner Orbit', () => (
    <Orbit
      className="innerOrbit"
      planets={[1, 2, 3]}
      categories={state.categories}
      fetchData={'props.fetchData'}
    />
  ))
  .add("Earth's Orbit", () => (
    <Orbit
      className={0}
      planets={[0]}
      categories={state.categories}
      fetchData={'props.fetchData'}
    />
  ));
