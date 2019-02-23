import React from 'react';
import {storiesOf} from '@storybook/react';
import Questions from './index.js';

storiesOf('Questions', module)
  .add('a computer question', () => (
    <Questions
      currentCount={10}
      displayScoreBoard={'this.props.displayScoreBoard'}
      categoryIndex={4}
      questions={{
        category: 'Science%3A%20Computers',
        type: 'multiple',
        difficulty: 'medium',
        question:
          'Which%20of%20these%20programming%20languages%20is%20a%20low-level%20language%3F',
        correct_answer: 'Assembly',
        incorrect_answers: ['Python', 'C%23', 'Pascal']
      }}
      shuffleAnswer={['Assembly', 'Python', 'C%23', 'Pascal']}
      currentQuestion={0}
      id={'this.props.id'}
      categoryId={'this.props.categories[categoryIndex].id'}
    />
  ))
  .add('a general knowledge question', () => (
    <Questions
      currentCount={10}
      displayScoreBoard={'this.props.displayScoreBoard'}
      categoryIndex={0}
      questions={{
        category: 'General%20Knowledge',
        type: 'multiple',
        difficulty: 'easy',
        question:
          'What%20is%20the%20nickname%20of%20the%20US%20state%20of%20California%3F',
        correct_answer: 'Golden%20State',
        incorrect_answers: [
          'Sunshine%20State',
          'Bay%20State',
          'Treasure%20State'
        ]
      }}
      shuffleAnswer={['Assembly', 'Python', 'C%23', 'Pascal']}
      currentQuestion={0}
      id={'this.props.id'}
      categoryId={'this.props.categories[categoryIndex].id'}
    />
  ));
