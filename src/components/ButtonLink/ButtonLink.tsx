import React from 'react'
import {ButtonLinkWrapper} from './style'

interface Props {
	target?: string
	href: string
}

const ButtonLink: React.FunctionComponent<Props> = props => {
	return (
		<ButtonLinkWrapper target={props.target} rel="noopener" href={props.href}>
			{props.children}
		</ButtonLinkWrapper>
	)
}

export default ButtonLink
