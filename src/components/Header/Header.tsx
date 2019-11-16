import React from 'react'
import {
	HeaderWrapper,
	Navigation,
	StyledLink,
	SocialLinks,
	SocialLinkItem,
	LogoText,
} from './style'

const NavLink = (props: any) => (
	<StyledLink
		{...props}
		getProps={({isCurrent}) => {
			return {
				style: {
					color: isCurrent ? '#000000' : '#909090',
				},
			}
		}}
	/>
)

const Header: React.FunctionComponent = () => {
	return (
		<HeaderWrapper>
			<Navigation>
				<NavLink to="/">Welcome</NavLink>
				<NavLink to="/projects">Project</NavLink>
			</Navigation>
			<LogoText to="/">Huy Trinh</LogoText>
			<SocialLinks>
				<SocialLinkItem href="https://github.com/HuyAms">Github</SocialLinkItem>
				<SocialLinkItem href="https://www.linkedin.com/in/huy-trinh-dinh-253534131/">
					LinkedIn
				</SocialLinkItem>
			</SocialLinks>
		</HeaderWrapper>
	)
}

export default Header
