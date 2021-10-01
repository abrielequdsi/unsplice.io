import { StaticRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import OverviewCard from '../components/cards/OverviewCard';

test('overview card should show a title', async () => {
  const module = {
    name: 'Test Title',
    // desc: 'Test Description',
    // moduleCode: 'TEST123',
    // progress: 50,
  };
  const overviewCard = render(
    <StaticRouter>
      <OverviewCard module={module} />
    </StaticRouter>,
  );

  // console.log('overviewCard', overviewCard);

  const title = await overviewCard.findByTestId('title-test');
  // console.log(title);
  expect(title.textContent).toMatch('Test Title');
});
