import AuthReducer from './AuthReducer';
import MenuReducer from './MenuReducer';
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth : AuthReducer,
    menu: MenuReducer
})

export default rootReducer;