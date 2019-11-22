import styled from 'styled-components'
import {media} from '../../styles/utils'

export const ContainerWrapper = styled.div`
	max-width: 80%;
	margin: 0 auto;
	padding-left: 1rem;
	padding-right: 1rem;

	${media.phone} {
		max-width: unset;
	}
`
