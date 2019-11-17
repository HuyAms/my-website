import React from 'react'
import {HeaderHeading, HeaderTextContainer} from './style'

interface Props {
	heading: string
	subheading: string
}

const HeaderText: React.FunctionComponent<Props> = ({heading, subheading}) => {
	return (
		<HeaderTextContainer>
			<HeaderHeading>{heading}</HeaderHeading>
			<p>{subheading}</p>
		</HeaderTextContainer>
	)
}

export default HeaderText
