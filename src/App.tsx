import React from 'react'
import './services/contentfulClient'
import AppLayout from './layout/AppLayout'
import Home from './screens/home/Home'
import Projects from './screens/projects/Projects'
import Blogs from './screens/blogs/Blogs'
import {Router} from '@reach/router'

const App: React.FC = () => {
	return (
		<AppLayout>
			<Router primary={false}>
				<Home path="/" default={true} />
				<Projects path="/projects" />
				<Blogs path="/blogs" />
			</Router>
		</AppLayout>
	)
}

export default App
