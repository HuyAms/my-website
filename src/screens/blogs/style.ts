import styled from 'styled-components'
import {ContainerWrapper} from '../../components/Container/style'
import {media} from '../../styles/utils'

export const BlogList = styled(ContainerWrapper)`
	padding-top: 9.6rem;
	padding-bottom: 9.6rem;
	display: grid;
	grid-gap: 4.8rem;
	grid-template-columns: repeat(3, 1fr);

	${media.tabPort} {
		grid-template-columns: repeat(2, 1fr);
	}

	${media.phone} {
		grid-template-columns: repeat(1, 1fr);
	}
`
