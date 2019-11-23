import React from 'react'
import {HeaderHeading, HeaderTextContainer} from './style'

interface Props {
	heading: string
	subheading: string
	textCenter?: boolean
	width?: string
}

const HeaderText: React.FunctionComponent<Props> = ({
	heading,
	subheading,
	textCenter,
	width,
}) => {
	return (
		<HeaderTextContainer
			data-testid="header-text"
			width={width}
			textCenter={textCenter}
		>
			<HeaderHeading>{heading}</HeaderHeading>
			<p>{subheading}</p>
		</HeaderTextContainer>
	)
}

export default HeaderText

HeaderText.defaultProps = {
	textCenter: true,
	width: '50%',
}
