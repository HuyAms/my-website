import 'sanitize.css/sanitize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {GlobalStyle} from './styles/GlobalStyle'
import {ThemeProvider} from 'styled-components'
import {theme} from './styles/theme'
import {Provider} from 'react-redux'
import {configureStore} from './configStore'

const store = configureStore()

const app = (
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<App />
			<GlobalStyle />
		</Provider>
	</ThemeProvider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
