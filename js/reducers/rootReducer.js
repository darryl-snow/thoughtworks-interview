/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import agentsReducer from './agentsReducer';

// If there's more than 1 reducer:
// import { combineReducers } from 'redux';
// const rootReducer = combineReducers({ agentsReducer, myReducer })
const rootReducer = agentsReducer;

export default rootReducer;
