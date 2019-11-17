import React from 'react'
import {RouteComponentProps} from '@reach/router'
import Project from './components/Project'
import Banner from '../../components/Banner/Banner'
import BannerImage from '../../assets/banner.jpg'
import {ProjectListWrapper} from './style'

interface Props extends RouteComponentProps {}

const mockHomeBanner = {
	content:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales eget leo et dignissim. Proin tincidunt lacus lacinia turpis gravida hendrerit',
	imgUrl: BannerImage,
}

const Projects: React.FC<Props> = () => {
	return (
		<>
			<Banner text={mockHomeBanner.content} imageUrl={mockHomeBanner.imgUrl} />
			<ProjectListWrapper>
				<Project />
				<Project />
				<Project />
				<Project />
			</ProjectListWrapper>
		</>
	)
}

export default Projects
