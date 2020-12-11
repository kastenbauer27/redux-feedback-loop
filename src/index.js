import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const feelingReducer = (state=0, action) => {
    return state
}

const comprehensionReducer = (state=0, action) => {
    return state
}

const supportReducer = (state=0, action) => {
    return state
}

const commentsReducer = (state='', action) => {
    return state
}

const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        comprehensionReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
