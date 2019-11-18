import React from 'react'
import {RouteComponentProps} from '@reach/router'
import BannerImage from '../../assets/banner.jpg'
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills'
import Resume from './components/Resume/Resume'
import Fact from './components/Fact/Fact'
import Contact from './components/Contact/Contact'
import Banner from '../../components/Banner/Banner'

interface Props extends RouteComponentProps {}

const mockHomeBanner = {
	content:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales eget leo et dignissim. Proin tincidunt lacus lacinia turpis gravida hendrerit',
	imgUrl: BannerImage,
}

const Home: React.FC<Props> = () => {
	return (
		<>
			<Banner text={mockHomeBanner.content} imageUrl={mockHomeBanner.imgUrl} />
			<TechnicalSkills />
			<Resume />
			<Fact />
			<Contact />
		</>
	)
}

export default Home
