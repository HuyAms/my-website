import React from 'react'
import {BannerImage, BannerText, BannerWrapper, ButtonContainer} from './style'
import Container from '../Container/Container'
import ButtonLink from '../ButtonLink/ButtonLink'
import {connect} from 'react-redux'

interface Props {
	text: string
	imageUrl: string
	generalInfo
}

const Banner: React.FunctionComponent<Props> = ({
	text,
	imageUrl,
	generalInfo,
}) => {
	const renderDownloadCVButton = () => {
		if (generalInfo.isLoading || !generalInfo.data) {
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
			<BannerImage
				data-testid="banner-image"
				style={{backgroundImage: `url(${imageUrl})`}}
			></BannerImage>
		</>
	)
}

const mapStateToProps = ({generalInfo}) => {
	return {generalInfo}
}

export default connect(mapStateToProps)(Banner)
