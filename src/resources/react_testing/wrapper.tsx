import { configureStore, Store } from '@reduxjs/toolkit';
import React, { ComponentType, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { reducer } from '../../state/store';

export const makeStore = (): Store => configureStore({ reducer });
const history = createMemoryHistory();

const wrapComponent = (
    Component: ComponentType,
    store: Store | null = null,
    props = {}
): ReactElement => (
    <Provider store={store || makeStore()}>
        <Router history={history}>
            <Component {...props} />
        </Router>
    </Provider>
);

export default wrapComponent;
