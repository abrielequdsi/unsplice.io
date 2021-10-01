import { StaticRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import ClassCard from '../components/cards/ClassCard';
import Class from '../components/sub-pages/Class';
import { userInfo } from './mocks';
import { students } from './mocks';

test('class card should display student institution', async () => {
  const classCard = render(
    <StaticRouter>
      <ClassCard userInfo={userInfo} />
    </StaticRouter>,
  );

  const classcard = await classCard.findByTestId('classcard-test');
  expect(classcard.textContent).toMatch('University of Tests');
});
