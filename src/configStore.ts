import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {homeReducer} from './store/homeReducer'
import thunk from 'redux-thunk'

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const rootReducer = combineReducers({
	home: homeReducer,
})

const configureStore = (preloadedState?: any) => {
	const isDevelopment = process.env.NODE_ENV === 'development'

	// Config redux devtool in development

	const composeEnhancers =
		(isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

	// Middlewares

	const middlewares = [thunk]

	if (isDevelopment) {
		// tslint:disable-next-line:no-var-requires
		const {createLogger} = require('redux-logger')
		const logger = createLogger()
		middlewares.push(logger)
	}

	const store = createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(applyMiddleware(...middlewares)),
	)

	return store
}

export {configureStore}
