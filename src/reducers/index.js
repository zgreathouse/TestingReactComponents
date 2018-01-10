import { combineReducers } from 'redux';

//reducers
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  comments: commentsReducer
});

export default rootReducer;
