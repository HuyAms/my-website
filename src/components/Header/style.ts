import styled from 'styled-components'
import {Link} from '@reach/router'

export const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 3rem;
`

export const LogoText = styled(Link)`
	text-transform: uppercase;
	cursor: pointer;
	text-decoration: none;
	font-weight: bold;
	font-size: ${props => props.theme.fontSizes.lg};
	color: ${props => props.theme.colors.black};
	letter-spacing: 1.6px;
`

export const Navigation = styled.nav`
	display: flex;
	align-items: center;
`

export const StyledLink = styled(Link)`
	text-decoration: none;
	font-weight: 400;

	&:hover {
		color: ${props => props.theme.colors.black} !important;
	}

	&:not(:last-child) {
		margin-right: 1.8rem;
	}
`

export const SocialLinks = styled.div`
	text-decoration: none;
	list-style: none;
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
		margin-right: 1.8rem;
	}
`
