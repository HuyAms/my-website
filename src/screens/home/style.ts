import styled from 'styled-components'
import {container, media} from '../../styles/utils'

export const BannerContainer = styled.section`
	${container};
	padding: 9.6rem 1rem;
`

export const BannerText = styled.h1`
	width: 50%;
	text-align: center;
	margin: 0 auto;

	${media.phone} {
		width: 90%;
	}
`

export const BannerImage = styled.div`
	height: 80vh;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
`
