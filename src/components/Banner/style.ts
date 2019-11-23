import styled from 'styled-components'
import {media} from '../../styles/utils'

export const BannerWrapper = styled.section`
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

export const ButtonContainer = styled.div`
	text-align: center;
	margin-top: 4.8rem;
`
