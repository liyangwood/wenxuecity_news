import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import newsReducer from '../news/reducer';


export default () => {
	const reducers = {
		news : newsReducer

	};

	const middleware = [thunk];

	return createStore(
		combineReducers(reducers),
		applyMiddleware(...middleware),
	);
};
