import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { retrievePhotosEpic } from "./store/photoList/actions";
import { retrievePhotoEpic } from "./store/photoDetail/actions";
import * as reducers from './store/reducers';

const rootReducer = combineReducers(reducers);
const rootEpic = combineEpics(retrievePhotosEpic, retrievePhotoEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
