import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware } from 'redux';
import rootReducer from './Store/Reducers/RootReducer';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import { getFirebas} from 'react-redux-firebase'
 
const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.register();
