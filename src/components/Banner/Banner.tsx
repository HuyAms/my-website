import React from 'react'
import {BannerImage, BannerText, BannerWrapper, ButtonContainer} from './style'
import Container from '../Container/Container'
import ButtonLink from '../ButtonLink/ButtonLink'

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
					<ButtonContainer>
						<ButtonLink href="re">Download My CV</ButtonLink>
					</ButtonContainer>
				</Container>
			</BannerWrapper>
			<BannerImage style={{backgroundImage: `url(${imageUrl})`}}></BannerImage>
		</>
	)
}

export default Banner
