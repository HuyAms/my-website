import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import faker from 'faker'
import ButtonLink from './ButtonLink'
import {render} from '../../utils/testUtil'

const renderButtonLink = () => {
	// Arrange
	const target = faker.lorem.word()
	const href = faker.internet.url()
	const buttonText = faker.lorem.word()

	const utils = render(
		<ButtonLink href={href} target={target}>
			{buttonText}
		</ButtonLink>,
	)

	return {...utils, href, target, buttonText}
}

describe('<ButtonLink/>', () => {
	it('should render ButtonLink with correct href', () => {
		// Act
		const {href, getByText, buttonText} = renderButtonLink()

		// Assert
		expect(getByText(buttonText)).toHaveAttribute('href', href)
	})

	it('should render ButtonLink with correct target', () => {
		// Act
		const {target, getByText, buttonText} = renderButtonLink()

		// Assert
		expect(getByText(buttonText)).toHaveAttribute('target', target)
	})
})
