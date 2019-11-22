import React from 'react'
import {RouteComponentProps} from '@reach/router'
import Banner from '../../components/Banner/Banner'
import {connect} from 'react-redux'
import {getBlogScreen} from '../../store/blogScreenReducer'

interface Props extends RouteComponentProps {
	getBlogScreen: () => any
	blogScreen
}

const Blog: React.FC<Props> = ({blogScreen, getBlogScreen}) => {
	React.useEffect(() => {
		getBlogScreen()
	}, [])

	const renderBlogPage = () => {
		if (blogScreen.isLoading || !blogScreen.data) {
			return 'Loading'
		}

		// Banner
		const blogBannerData = blogScreen.data.hero.fields

		return (
			<>
				<Banner
					text={blogBannerData.heading}
					imageUrl={blogBannerData.image.fields.file.url}
				/>
			</>
		)
	}

	return <>{renderBlogPage()}</>
}

const mapStateToProps = ({blogScreen}) => {
	return {blogScreen}
}

const mapDispatchToProps = {
	getBlogScreen,
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
