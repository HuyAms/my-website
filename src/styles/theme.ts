import {css, DefaultTheme} from 'styled-components'

export const colors = {
	white: '#ffffff',
	black: '#000000',
	gray: '#909090',
	lightGray: '#f5f6f8',
}

export const appColors = {
	text: colors.black,
	darkBackground: colors.lightGray,
}

export const fontStack = css`'Nunito', sans-serif`

export const fontSizes = {
	xs: '0.8rem',
	sm: '1.4rem',
	md: '1.6rem',
	lmd: '1.8rem',
	lg: '3.2rem',
	xl: '3.6rem',
	xxl: '5.4rem',
}

const space = [
	'0',
	'.4rem',
	'.8rem',
	'1.2rem',
	'1.6rem',
	'2.0rem',
	'3.2rem',
	'4.8rem',
	'6.4rem',
	'9.6rem',
]

export const theme: DefaultTheme = {
	space,
	fontSizes,
	appColors,
	colors,
	fontStack,
}
