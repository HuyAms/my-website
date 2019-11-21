import React from 'react'
import {RouteComponentProps} from '@reach/router'
import {connect} from 'react-redux'
import BannerImage from '../../assets/banner.jpg'
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills'
import Resume, {ResumeItem} from './components/Resume/Resume'
import Fact from './components/Fact/Fact'
import Contact from './components/Contact/Contact'
import Banner from '../../components/Banner/Banner'
import {getHomeContent} from '../../store/homeReducer'

interface Props extends RouteComponentProps {
	getHomeContent: () => any
	home
}

const Home: React.FC<Props> = ({getHomeContent, home}) => {
	React.useEffect(() => {
		getHomeContent()
	}, [])

	const renderHomePage = () => {
		if (home.isLoading || !home.data) {
			return 'Loading'
		}

		const homeBannerData = home.data.hero.fields

		const technicalSkillsData = home.data.sections[0].fields
		const techincalSkillImgs = technicalSkillsData.images.map(
			image => image.fields.file.url,
		)

		const workExpData = home.data.sections[1].fields
		const educationExpData = home.data.sections[2].fields

		const resumeData: ResumeItem[] = [workExpData, educationExpData].map(
			data => {
				return {
					heading: data.heading,
					workExps: data.experiences.map(exp => ({
						title: exp.fields.title,
						subtitle: exp.fields.subtitle,
						description: exp.fields.description,
						start: exp.fields.start,
						end: exp.fields.end,
					})),
				}
			},
		)

		return (
			<>
				<Banner
					text={homeBannerData.heading}
					imageUrl={homeBannerData.image.fields.file.url}
				/>
				<TechnicalSkills
					heading={technicalSkillsData.heading}
					subheading={technicalSkillsData.description}
					imgSources={techincalSkillImgs}
				/>
				<Resume resumeItems={resumeData} />
				<Fact />
				<Contact />
			</>
		)
	}

	return <>{renderHomePage()}</>
}

const mapStateToProps = ({home}) => {
	return {home}
}

const mapDispatchToProps = {
	getHomeContent,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
