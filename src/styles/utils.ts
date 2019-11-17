import {css} from 'styled-components'

export enum ScreenSizes {
	phone = 600,
	tabPort = 768,
	tabLand = 1024,
	bigDesktop = 1800,
}
export const maxWidth = (maxWidth: number) =>
	`@media (max-width: ${maxWidth / 16}em)`
export const minWidth = (minWidth: number) =>
	`@media (min-width: ${minWidth / 16}em)`

export const media = {
	phone: maxWidth(ScreenSizes.phone),
	tabPort: maxWidth(ScreenSizes.tabPort),
	tabLand: maxWidth(ScreenSizes.tabLand),
	bigDesktop: minWidth(ScreenSizes.bigDesktop),
}

export const container = () => css`
	max-width: 114rem;
	margin: 0 auto;
	padding-left: 1rem;
	padding-right: 1rem;
`
