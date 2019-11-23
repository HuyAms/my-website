import React from 'react'
import {RouteComponentProps} from '@reach/router'

const ScrollToTop: React.FunctionComponent<RouteComponentProps> = ({
	children,
	location,
}) => {
	React.useEffect(() => window.scrollTo(0, 0), [location && location.pathname])
	return <>{children}</>
}

export default ScrollToTop
