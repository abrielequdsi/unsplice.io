import { render } from '@testing-library/react';
import CreateModule from '../components/cards/CreateModule';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ApolloProvider from '../ApolloProvider';

jest.mock('react-redux', () => {
  return {
    useSelector: () => {
      return '23456789';
    },
  };
});

describe('Create Module', () => {
  test('<Create Module /> renders without crashing', () => {
    render(
      <ApolloProvider>
        <CreateModule />,
      </ApolloProvider>,
    );
  });
});
