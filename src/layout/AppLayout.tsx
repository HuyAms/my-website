import React from 'react'
import Header from '../components/Header/Header'

const AppLayout: React.FunctionComponent = props => {
	return (
		<div>
			<Header />
			{props.children}
		</div>
	)
}

export default AppLayout
