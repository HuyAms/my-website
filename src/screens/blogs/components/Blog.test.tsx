import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import faker from 'faker'
import {render} from '../../../utils/testUtil'
import Blog from './Blog'

const renderBlog = () => {
	// Arrange
	const heading = faker.lorem.words()
	const coverImageUrl = faker.internet.url()
	const readMoreUrl = faker.internet.url()
	const author = faker.lorem.word()
	const tags = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]

	const utils = render(
		<Blog
			heading={heading}
			coverImageUrl={coverImageUrl}
			readMoreUrl={readMoreUrl}
			author={author}
			tags={tags}
		/>,
	)

	return {...utils, heading, coverImageUrl, readMoreUrl, author, tags}
}

describe('<Blog/>', () => {
	it('should render Blog with correct text', () => {
		const {getByText, heading, author, tags} = renderBlog()

		expect(getByText(heading)).toBeInTheDocument()
		expect(getByText(author)).toBeInTheDocument()

		tags.forEach(tag => {
			expect(getByText(tag)).toBeInTheDocument()
		})
	})

	it('should render Read more button with correct url', () => {
		const {getByText, readMoreUrl} = renderBlog()

		expect(getByText('Read more')).toHaveAttribute('href', readMoreUrl)
	})
})
