import React from 'react'

const AppLayout: React.FunctionComponent = props => {
	return (
		<div>
			<h1>This is the header</h1>
			{props.children}
		</div>
	)
}

export default AppLayout
