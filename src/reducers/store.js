import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const middleware = [thunk, ReduxPromise];

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
});
