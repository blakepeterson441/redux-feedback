import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// set up Reducer
const feelingReducer = (state = {}, action) => {
    if (action.type === 'ADD_TO_FEELING'){
        return action.payload;
    }
    return state;
} // end Reducer

// set up Reducer
const understandingReducer = (state = {}, action) => {
    if (action.type === 'ADD_TO_UNDERSTANDING') {
        return action.payload;
    }
    return state;
} // end Reducer

// set up Reducer
const supportReducer = (state = {}, action) => {
    if (action.type === 'ADD_TO_SUPPORT') {
        return action.payload;
    }
    return state;
} // end Reducer

// set up Reducer
const commentsReducer = (state = {}, action) => {
    if (action.type === 'ADD_TO_COMMENTS') {
        return action.payload;
    }
    return state;
} // end Reducer



const reduxStore = createStore(
    combineReducers({
        // all reducers will go here...
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
    }),

    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
