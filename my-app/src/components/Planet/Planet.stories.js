import React from 'react';
import {storiesOf} from '@storybook/react';
import Planet from './index.js';
import state from '../../reducers/intitalState.js';

storiesOf('Planets', module)
  .add('planet 1', () => (
    <Planet key={1} planet={1} categories={state.categories} />
  ))
  .add('planet 2', () => (
    <Planet key={2} planet={2} categories={state.categories} />
  ))
  .add('planet 3', () => (
    <Planet key={3} planet={3} categories={state.categories} />
  ))
  .add('planet 4', () => (
    <Planet key={4} planet={4} categories={state.categories} />
  ))
  .add('planet 5', () => (
    <Planet key={5} planet={5} categories={state.categories} />
  ))
  .add('planet 6', () => (
    <Planet key={6} planet={6} categories={state.categories} />
  ))
  .add('planet 7', () => (
    <Planet key={7} planet={7} categories={state.categories} />
  ))
  .add('planet 8', () => (
    <Planet key={8} planet={8} categories={state.categories} />
  ))
  .add('planet 9', () => (
    <Planet key={9} planet={9} categories={state.categories} />
  ))
  .add('planet 10', () => (
    <Planet key={10} planet={10} categories={state.categories} />
  ))
  .add('planet 11', () => (
    <Planet key={11} planet={11} categories={state.categories} />
  ))
  .add('planet 12', () => (
    <Planet key={12} planet={12} categories={state.categories} />
  ));
