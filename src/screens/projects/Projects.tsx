import React from 'react'
import {RouteComponentProps} from '@reach/router'
import Project from './components/Project'
import Banner from '../../components/Banner/Banner'
import {Header, ProjectListWrapper} from './style'
import {getProjectsScreen} from '../../store/projectsScreenReducer'
import {connect} from 'react-redux'
import PageSpinner from '../../components/Spinner/PageSpinner'

interface Props extends RouteComponentProps {
	getProjectsScreen: () => any
	projectScreen
}

const Projects: React.FC<Props> = ({projectScreen, getProjectsScreen}) => {
	React.useEffect(() => {
		if (!projectScreen.data) {
			getProjectsScreen()
		}
	}, [projectScreen.data])

	const renderProjectsPage = () => {
		if (projectScreen.isLoading || !projectScreen.data) {
			return <PageSpinner />
		}

		// Banner
		const projectsBannerData = projectScreen.data.hero.fields

		// Projects
		const projectsData = projectScreen.data.sections[0].fields.projects

		const renderProjects = () => {
			return projectsData.map(data => {
				const {
					title,
					description,
					type,
					readMore = null,
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
				<Header>
					<h2>Total projects: {projectsData.length}</h2>
				</Header>
				<ProjectListWrapper>{renderProjects()}</ProjectListWrapper>
			</>
		)
	}

	return <>{renderProjectsPage()}</>
}

const mapStateToProps = ({projectScreen}) => {
	return {projectScreen}
}

const mapDispatchToProps = {
	getProjectsScreen,
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
