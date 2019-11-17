import styled from 'styled-components'
import {media} from '../../styles/utils'

export const HeaderTextContainer = styled.div<{
	textCenter?: boolean
	width?: string
}>`
	width: ${props => props.width};
	text-align: ${props => (props.textCenter ? 'center' : 'left')};
	margin: 0 auto;
	margin-bottom: 4.8rem;

	${media.phone} {
		width: 90%;
	}
`

export const HeaderHeading = styled.h2`
	margin-bottom: 1.2rem;
`
