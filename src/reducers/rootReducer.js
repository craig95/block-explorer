import { combineReducers } from 'redux';

import tickerReducer from './ticker-reducer/ticker.reducer';

const rootReducer = combineReducers({
    tickerReducer,
});

export default rootReducer;
