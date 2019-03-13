import { combineReducers } from 'redux';
import { games } from './gamesReducer';
import { friend } from './friendReducer';
import { users } from './usersReducer';
const rootReducer = combineReducers({
   games,
   friend,
   users,
});
export default rootReducer;