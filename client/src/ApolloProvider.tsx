import React from 'react';
import App from './App';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";
// redux
import { Provider } from 'react-redux';
import store from './redux/store';

const client = new ApolloClient({
    uri: 'http://localhost:5000',
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client={client}>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </ApolloProvider>
)


