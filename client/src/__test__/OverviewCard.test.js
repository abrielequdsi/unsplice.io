import { StaticRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import OverviewCard from '../components/cards/OverviewCard';

describe('Overview Card', () => {
  test('Overview Card should show a course name', async () => {
    const module = {
      name: 'Test Title',
    };
    const overviewCard = render(
      <StaticRouter>
        <OverviewCard module={module} />
      </StaticRouter>,
    );

    const title = await overviewCard.findByTestId('title-test');
    expect(title.textContent).toMatch('Test Title');
  });

  test('<Overview Card /> renders without crashing', () => {
    const module = {
      name: 'Coding with Friends',
      moduleCode: 'CF123',
      desc: 'Coding with my friends!',
      progress: 0,
      contents: [
        {
          number: 1,
          title: 'Interactive Quiz',
          desc: 'Asking students to vote on something',
          completed: false,
          notionContent: 'www.notion.com',
          createdAt: '2021-09-30T13:49:51.721Z',
          _id: { $oid: '6155c07fbaad8f31f4d9caa5' },
        },
      ],
      createdAt: '2021-09-30T13:46:33.090Z',
    };

    const div = document.createElement('div');
    render(<OverviewCard module={module} />, div);
  });
});
