import React from 'react'
import './services/contentfulClient'
import AppLayout from './layout/AppLayout'
import Home from './screens/home/Home'
import Projects from './screens/projects/Projects'
import Blogs from './screens/blogs/Blogs'
import {Router} from '@reach/router'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App: React.FC = () => {
	return (
		<AppLayout>
			<Router primary={false}>
				<ScrollToTop path="/">
					<Home path="/" default={true} />
					<Projects path="/projects" />
					<Blogs path="/blogs" />
				</ScrollToTop>
			</Router>
		</AppLayout>
	)
}

export default App
