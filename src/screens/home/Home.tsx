import React from 'react'
import {RouteComponentProps} from '@reach/router'
import {BannerWrapper, BannerText, BannerImage} from './style'
import Banner from '../../assets/banner.jpg'
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills'
import Resume from './components/Resume/Resume'
import Container from '../../components/Container/Container'

interface Props extends RouteComponentProps {}

const Home: React.FC<Props> = () => {
	return (
		<>
			<BannerWrapper>
				<Container>
					<BannerText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque lobortis cursus lectus ac suscipit. Phasellus vel risus
						tincidunt, eleifend leo
					</BannerText>
				</Container>
			</BannerWrapper>
			<BannerImage style={{backgroundImage: `url(${Banner})`}}></BannerImage>
			<TechnicalSkills />
			<Resume />
		</>
	)
}

export default Home
