import styled from 'styled-components'
import {media} from '../../../../styles/utils'

export const FactWrapper = styled.section`
	padding: 9.6rem 1rem;
`

export const FactSection = styled.div`
	display: flex;
	//background-color: yellow;

	${media.phone} {
		flex-direction: column-reverse;
	}
`

export const FactHeader = styled.div`
	flex: 1;
	//background-color: red;
`

export const FactImage = styled.img`
	width: 100%;
`

export const FactContent = styled.div`
	flex: 1;
	//background-color: blue;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
`
