import { combineReducers } from 'redux';

import tickerReducer from './ticker-reducer/ticker.reducer';
import blocksReducer from './blocks-reducer/blocks.reducer';

const rootReducer = combineReducers({
    tickerReducer,
    blocksReducer,
});

export default rootReducer;
