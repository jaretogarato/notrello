import { combineReducers } from 'redux';
import items from './items';

const rootReducer = combineReducers({
  items,
});

// what redux store looks like here
// initial:
// {}
// apps reducer
// {
//   apps: []
// }
// later
// {
//   apps: [{}, {}, {}...]
// }

export default rootReducer;
