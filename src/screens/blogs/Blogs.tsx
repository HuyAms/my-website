import React from 'react'
import {RouteComponentProps} from '@reach/router'
import BannerImage from '../../assets/banner.jpg'
import Banner from '../../components/Banner/Banner'

const mockBlogsBanner = {
	content:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales eget leo et dignissim. Proin tincidunt lacus lacinia turpis gravida hendrerit',
	imgUrl: BannerImage,
}

const Blog: React.FunctionComponent<RouteComponentProps> = () => {
	return (
		<>
			<Banner
				text={mockBlogsBanner.content}
				imageUrl={mockBlogsBanner.imgUrl}
			/>
		</>
	)
}

export default Blog
