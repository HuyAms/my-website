import React from 'react'
import './services/contentfulClient'
import AppLayout from './layout/AppLayout'
import Home from './screens/home/Home'
import Projects from './screens/projects/Projects'
import Blogs from './screens/blogs/Blogs'
import {Router} from '@reach/router'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import IconUp from './assets/arrow-top.svg'
import {BackToTop} from './style'
import {animateScroll} from 'react-scroll'

const App: React.FC = () => {
	const scrollToTop = () => {
		animateScroll.scrollToTop()
	}

	return (
		<AppLayout>
			<Router primary={false}>
				<ScrollToTop path="/">
					<Home path="/" default={true} />
					<Projects path="/projects" />
					<Blogs path="/blogs" />
				</ScrollToTop>
			</Router>
			<BackToTop onClick={scrollToTop} src={IconUp} />
		</AppLayout>
	)
}

export default App
