import { StaticRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import ClassCard from '../components/cards/ClassCard';
import Class from '../components/sub-pages/Class';
import { userInfo } from './mocks';
import { students } from './mocks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Classmates', () => {
  test('ClassCard should display student institution', async () => {
    const classCard = render(
      <StaticRouter>
        <ClassCard userInfo={userInfo} />
      </StaticRouter>,
    );

    const card = await classCard.findByTestId('institution-test');
    expect(card.textContent).toMatch('University of Tests');
  });

  test('Individual ClassCard renders', () => {
    const div = document.createElement('div');
    render(<ClassCard userInfo={userInfo} />, div);
  });

  //TODO: integrate with redux
  // test('Class heading renders', () => {
  //   const initialState = [userInfo, userInfo];
  //   const mockStore = configureStore();
  //   let store, wrapper;

  //   store = mockStore(initialState);
  //   const screen = render(
  //     <Provider store={store}>
  //       <Class />
  //     </Provider>,
  //   );

  //   screen.getByTestId(/Class/);
  // });
});
