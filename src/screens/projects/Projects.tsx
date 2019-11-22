import React from 'react'
import {RouteComponentProps} from '@reach/router'
import Project from './components/Project'
import Banner from '../../components/Banner/Banner'
import {ProjectListWrapper} from './style'
import {getProjectsScreen} from '../../store/projectsScreenReducer'
import {connect} from 'react-redux'
import {getProjects} from '../../store/projectsReducer'

interface Props extends RouteComponentProps {
	getProjectsScreen: () => any
	getProjects: () => any
	projectScreen
	projects
}

const Projects: React.FC<Props> = ({
	projectScreen,
	getProjectsScreen,
	getProjects,
	projects,
}) => {
	React.useEffect(() => {
		getProjectsScreen()
		getProjects()
	}, [])

	const renderProjectsPage = () => {
		if (projectScreen.isLoading || !projectScreen.data) {
			return 'Loading'
		}

		// Banner
		const projectsBannerData = projectScreen.data.hero.fields

		console.log('PROJECTs: ', projects)

		const renderProjects = () => {
			if (projects.isLoading && !projects.data) {
				return null
			}

			return projects.data.map(data => {
				const {
					title,
					description,
					type,
					readMore,
					features,
					image,
				} = data.fields
				return (
					<Project
						key={title}
						title={title}
						description={description}
						type={type}
						readMore={readMore}
						features={features}
						imageUrl={image.fields.file.url}
					/>
				)
			})
		}

		return (
			<>
				<Banner
					text={projectsBannerData.heading}
					imageUrl={projectsBannerData.image.fields.file.url}
				/>
				<ProjectListWrapper>{renderProjects()}</ProjectListWrapper>
			</>
		)
	}

	return <>{renderProjectsPage()}</>
}

const mapStateToProps = ({projectScreen, projects}) => {
	return {projectScreen, projects}
}

const mapDispatchToProps = {
	getProjectsScreen,
	getProjects,
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
