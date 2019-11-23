import React from 'react'
import {BannerImage, BannerText, BannerWrapper, ButtonContainer} from './style'
import Container from '../Container/Container'
import ButtonLink from '../ButtonLink/ButtonLink'
import {useStore} from 'react-redux'

interface Props {
	text: string
	imageUrl: string
}

const Banner: React.FunctionComponent<Props> = ({text, imageUrl}) => {
	const store = useStore()
	const {generalInfo} = store.getState()

	const renderDownloadCVButton = () => {
		if (generalInfo.isLoading && !generalInfo.data) {
			return null
		}

		return (
			<ButtonLink target="_blank" href={generalInfo.data.cvUrl}>
				Download My CV
			</ButtonLink>
		)
	}

	return (
		<>
			<BannerWrapper>
				<Container>
					<BannerText>{text}</BannerText>
					<ButtonContainer>{renderDownloadCVButton()}</ButtonContainer>
				</Container>
			</BannerWrapper>
			<BannerImage style={{backgroundImage: `url(${imageUrl})`}}></BannerImage>
		</>
	)
}

export default Banner
