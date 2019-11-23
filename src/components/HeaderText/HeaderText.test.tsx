import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import faker from 'faker'
import HeaderText from './HeaderText'
import {render} from '../../utils/testUtil'

const renderHeaderText = () => {
	// Arrange
	const heading = faker.lorem.word()
	const subheading = faker.internet.url()
	const textCenter = faker.random.boolean()
	const width = '90%'

	const utils = render(
		<HeaderText
			heading={heading}
			subheading={subheading}
			textCenter={textCenter}
			width={width}
		/>,
	)

	return {...utils, width, textCenter, subheading, heading}
}

describe('<HeaderText/>', () => {
	it('should render HeaderText with correct text', () => {
		// Act
		const {heading, getByText, subheading} = renderHeaderText()

		// Assert
		expect(getByText(heading)).toBeInTheDocument()
		expect(getByText(subheading)).toBeInTheDocument()
	})

	it('should render ButtonLink with correct center text', () => {
		// Act
		const {textCenter, getByTestId} = renderHeaderText()

		// Assert
		const textAlign = textCenter ? 'center' : 'left'
		expect(getByTestId('header-text')).toHaveStyle(`text-align: ${textAlign}`)
	})
})
