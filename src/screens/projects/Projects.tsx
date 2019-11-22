import React from 'react'
import {RouteComponentProps} from '@reach/router'
import Project from './components/Project'
import Banner from '../../components/Banner/Banner'
import {ProjectListWrapper} from './style'
import {getProjectsScreen} from '../../store/projectsReducer'
import {connect} from 'react-redux'

interface Props extends RouteComponentProps {
	getProjectsScreen: () => any
	projectScreen
}

const Projects: React.FC<Props> = ({projectScreen, getProjectsScreen}) => {
	React.useEffect(() => {
		getProjectsScreen()
	}, [])

	const renderProjectsPage = () => {
		if (projectScreen.isLoading || !projectScreen.data) {
			return 'Loading'
		}

		// Banner
		const projectsBannerData = projectScreen.data.hero.fields

		return (
			<>
				<Banner
					text={projectsBannerData.heading}
					imageUrl={projectsBannerData.image.fields.file.url}
				/>
				<ProjectListWrapper>
					<Project />
					<Project />
					<Project />
					<Project />
				</ProjectListWrapper>
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
