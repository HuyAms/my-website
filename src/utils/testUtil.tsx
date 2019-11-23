import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {theme} from '../styles/theme'
import {Provider} from 'react-redux'
import {GlobalStyle} from '../styles/GlobalStyle'
import {ThemeProvider} from 'styled-components'
import {configureStore} from '../configStore'

const store = configureStore()

export const render = ui => {
	return {
		...rtlRender(
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					{ui}
					<GlobalStyle />
				</Provider>
			</ThemeProvider>,
		),
	}
}
