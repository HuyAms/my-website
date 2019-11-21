import React from 'react'
import {RouteComponentProps} from '@reach/router'
import {connect} from 'react-redux'
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

		// Banner
		const homeBannerData = home.data.hero.fields

		// Technical skills
		const technicalSkillsData = home.data.sections[0].fields
		const techincalSkillImgs = technicalSkillsData.images.map(
			image => image.fields.file.url,
		)

		// Experience
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

		// Fun Fact
		const funFactData = home.data.sections[3].fields

		// Contact
		const contactData = home.data.sections[4].fields

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
				<Fact
					heading={funFactData.heading}
					content={funFactData.description}
					imageUrl={funFactData.image.fields.file.url}
				/>
				<Contact
					address={contactData.address}
					email={contactData.email}
					heading={contactData.heading}
					socialMedia={contactData.socialMedia}
					mapUrl={contactData.mapUrl}
				/>
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
