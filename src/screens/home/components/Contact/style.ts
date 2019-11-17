import styled from 'styled-components'
import {media} from '../../../../styles/utils'
import Container from '../../../../components/Container/Container'

export const ContactWrapper = styled.section`
	padding: 9.6rem 1rem;
	background-color: ${props => props.theme.appColors.darkBackground};
`

export const ContactSection = styled.div`
	display: flex;

	${media.phone} {
		flex-direction: column;
	}
`

export const ContactContent = styled.div`
	flex: 2;
`

export const ContactHeader = styled.div`
	flex: 1;
	padding: 1rem;
`

export const Map = styled.iframe`
	border: 5px solid #ffffff;
	width: 500px;
	height: 350px;
	display: block;
`

export const ContactInfo = styled.div`
	margin-bottom: 4.8rem;
`

export const ContactTitle = styled.span`
	font-weight: bold;
`
