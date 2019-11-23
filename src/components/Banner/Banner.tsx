import React from 'react'
import {BannerImage, BannerText, BannerWrapper} from './style'
import Container from '../Container/Container'

interface Props {
	text: string
	imageUrl: string
}

const Banner: React.FunctionComponent<Props> = ({text, imageUrl}) => {
	return (
		<>
			<BannerWrapper>
				<Container>
					<BannerText>{text}</BannerText>
				</Container>
			</BannerWrapper>
			<BannerImage
				data-testid="banner-image"
				style={{backgroundImage: `url(${imageUrl})`}}
			></BannerImage>
		</>
	)
}

export default Banner
