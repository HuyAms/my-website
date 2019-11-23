import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import faker from 'faker'
import Banner from './Banner'
import {render} from '../../utils/testUtil'

const renderBanner = () => {
	// Arrange
	const mockBannerText = faker.lorem.words()
	const mockImgUrl = faker.internet.url()

	const utils = render(<Banner text={mockBannerText} imageUrl={mockImgUrl} />)

	return {...utils, mockImgUrl, mockBannerText}
}

describe('<Banner/>', () => {
	it('should render banner with correct text', () => {
		// Act
		const {mockBannerText, getByText} = renderBanner()

		// Assert
		expect(getByText(mockBannerText)).toBeInTheDocument()
	})

	it('should render banner with correct img url', () => {
		// Act
		const {mockImgUrl, getByTestId} = renderBanner()

		// Assert
		expect(getByTestId('banner-image')).toHaveStyle(
			`background-image: url(${mockImgUrl})`,
		)
	})
})
