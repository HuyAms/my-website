import styled from 'styled-components'
import {Link} from '@reach/router'
import {media} from '../../styles/utils'

// ===============================
// Header General
// ===============================

export const LogoText = styled(Link)`
	text-transform: uppercase;
	cursor: pointer;
	text-decoration: none;
	font-weight: bold;
	font-size: ${props => props.theme.fontSizes.lg};
	color: ${props => props.theme.colors.black};
	letter-spacing: 1.6px;
`

export const StyledLink = styled(Link)`
	text-decoration: none;
	font-weight: 400;

	&:hover {
		color: ${props => props.theme.colors.black} !important;
	}

	&:not(:last-child) {
		margin-right: 3.6rem;
	}

	${media.tabPort} {
		font-size: ${props => props.theme.fontSizes.xl};
		margin-top: 3.6rem;
		&:not(:last-child) {
			margin-right: 0;
		}
	}
`

export const Icon = styled.img`
	height: 24px;
	width: 24px;
	object-fit: contain;
	cursor: pointer;
`
// ===============================
// Header Desktop
// ===============================

export const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 3.2rem 9rem;
`

export const Navigation = styled.nav`
	display: flex;
	align-items: center;
`

export const SocialLinkItem = styled.a`
	text-decoration: none;
	font-weight: 400;
	color: ${props => props.theme.colors.gray};

	&:hover {
		color: ${props => props.theme.colors.black};
	}

	&:not(:last-child) {
		margin-right: 3.6rem;
	}
`

export const SocialLinks = styled.ul`
	text-decoration: none;
	list-style: none;
	display: flex;
	align-items: center;
`

// ===============================
// Header Mobile
// ===============================
export const HeaderMobileWraper = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3.2rem 1.5rem;
	position: relative;
`

export const MenuIcon = styled(Icon)`
	position: absolute;
	right: 1.5rem;
`

export const MobileNavigationOverLay = styled.div<{
	isShow: boolean
}>`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: ${props => props.theme.colors.white};
	padding: 3.2rem 1.5rem;
	transition: all 350ms cubic-bezier(0.55, 0, 0.1, 1);
	transform: ${props =>
		props.isShow ? ' translateX(0)' : ' translateX(100%)'};
`

export const MobileNavigation = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const MobileSocialLinks = styled.ul`
	text-decoration: none;
	list-style: none;
	display: flex;
	justify-content: center;
	margin-top: 7.3rem;
`

export const MobileSocialIcon = styled.a`
	&:not(:last-child) {
		margin-right: 3.6rem;
	}
`
