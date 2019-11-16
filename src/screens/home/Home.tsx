import React from 'react'
import {RouteComponentProps} from '@reach/router'

interface Props extends RouteComponentProps {}

const Home: React.FC<Props> = () => {
	return <div>Home page!</div>
}

export default Home
