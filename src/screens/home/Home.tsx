import React from 'react'
import {RouteComponentProps} from '@reach/router'
import {BannerContainer, BannerText, BannerImage} from './style'
import Banner from '../../assets/banner.jpg'
import TechnicalSkills from './components/TechnicalSkills'

interface Props extends RouteComponentProps {}

const Home: React.FC<Props> = () => {
	return (
		<>
			<BannerContainer>
				<BannerText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					lobortis cursus lectus ac suscipit. Phasellus vel risus tincidunt,
					eleifend leo
				</BannerText>
			</BannerContainer>
			<BannerImage style={{backgroundImage: `url(${Banner})`}}></BannerImage>
			<TechnicalSkills />
		</>
	)
}

export default Home
