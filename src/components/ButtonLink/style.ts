import styled from 'styled-components'

export const ButtonLinkWrapper = styled.a`
	display: inline-block;
	text-decoration: none;
	padding: 0.5rem 4.5rem;
	border-radius: 5px;
	font-size: ${props => props.theme.fontSizes.sm};
	text-transform: uppercase;
	transition: all 0.2s;
	font-weight: 400;
	text-align: center;

	&,
	&:link,
	&:visited {
		background-color: ${props => props.theme.colors.black};
		color: ${props => props.theme.colors.white};
	}

	&:hover {
		color: ${props => props.theme.colors.white};
		text-decoration: none;
		background-color: ${props => props.theme.colors.black};
		opacity: 0.8;
	}
`
