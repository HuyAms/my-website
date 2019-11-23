import React from 'react'
import {RouteComponentProps} from '@reach/router'
import Banner from '../../components/Banner/Banner'
import {connect} from 'react-redux'
import {getBlogScreen} from '../../store/blogScreenReducer'
import {getBlogs} from '../../store/blogsReducer'
import Blog from './components/Blog'
import {BlogList} from './style'
import PageSpinner from '../../components/Spinner/PageSpinner'

interface Props extends RouteComponentProps {
	getBlogScreen: () => any
	getBlogs: () => any
	blogScreen
	blogs
}

const Blogs: React.FC<Props> = ({
	blogScreen,
	getBlogScreen,
	getBlogs,
	blogs,
}) => {
	React.useEffect(() => {
		if (!blogScreen.data) {
			getBlogScreen()
		}
	}, [blogScreen.data])

	React.useEffect(() => {
		if (!blogs.data) {
			getBlogs()
		}
	}, [blogs.data])

	const renderBlogPage = () => {
		if (blogScreen.isLoading || !blogScreen.data) {
			return <PageSpinner />
		}

		// Banner
		const blogBannerData = blogScreen.data.hero.fields

		const renderBlogList = () => {
			if (!blogs.isLoading && blogs.data) {
				return (
					<BlogList>
						{blogs.data.map(blog => {
							const {title, link, author, thumbnail, categories} = blog

							return (
								<Blog
									heading={title}
									coverImageUrl={thumbnail}
									author={author}
									tags={categories}
									readMoreUrl={link}
								/>
							)
						})}
					</BlogList>
				)
			}
		}

		return (
			<>
				<Banner
					text={blogBannerData.heading}
					imageUrl={blogBannerData.image.fields.file.url}
				/>
				<div>{renderBlogList()}</div>
			</>
		)
	}

	return <>{renderBlogPage()}</>
}

const mapStateToProps = ({blogScreen, blogs}) => {
	return {blogScreen, blogs}
}

const mapDispatchToProps = {
	getBlogScreen,
	getBlogs,
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
