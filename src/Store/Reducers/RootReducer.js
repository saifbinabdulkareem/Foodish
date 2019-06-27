import AuthReducer from './AuthReducer';
import MenuReducer from './MenuReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth : AuthReducer,
    menu: MenuReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;