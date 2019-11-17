import React from 'react'
import AppLayout from './layout/AppLayout'
import Home from './screens/home/Home'
import Projects from './screens/projects/Projects'
import {Router} from '@reach/router'

const App: React.FC = () => {
	return (
		<AppLayout>
			<Router>
				<Home path="/" />
				<Projects path="/projects" />
			</Router>
		</AppLayout>
	)
}

export default App
