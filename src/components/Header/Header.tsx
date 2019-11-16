import React from 'react'
import {Link} from '@reach/router'

const Header: React.FunctionComponent = () => {
	return (
		<header>
			<nav>
				<Link to="/">Welcome</Link>
				<Link to="/projects">Project</Link>
			</nav>
			<h2>Huy Trinh</h2>
			<ul>
				<li>Github</li>
				<li>LinkedIn</li>
			</ul>
		</header>
	)
}

export default Header
