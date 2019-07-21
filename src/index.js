import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const feelingReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_FEELING'){
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_SUPPORT') {
        return action.payload;
    }
    return state;
}

const commentReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_COMMENT') {
        return action.payload;
    }
    return state;
}

const reviewReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_REVIEW') {
        return action.payload;
    }
    return state;
}



const reduxStore = createStore(
    combineReducers({
        // all reducers will go here...
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer,
        reviewReducer,
    }),

    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
