import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'
import {render} from '../../utils/testUtil'

describe('<Header/>', () => {
	it('should render Header with correct nav items', () => {
		const {getByText} = render(<Header />)

		expect(getByText('Welcome')).toBeInTheDocument()
		expect(getByText('Projects')).toBeInTheDocument()
		expect(getByText('Blogs')).toBeInTheDocument()
		expect(getByText('Github')).toBeInTheDocument()
		expect(getByText('LinkedIn')).toBeInTheDocument()
		expect(getByText('Contact')).toBeInTheDocument()
	})
})
