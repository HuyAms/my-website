import React from 'react'

export const getWindowDimensions = () => {
	const {innerWidth: width, innerHeight: height} = window
	return {
		width,
		height,
	}
}

export const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = React.useState(
		getWindowDimensions(),
	)

	React.useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions
}

export const formatDate = (date: Date): string => {
	const d = new Date(date)

	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'June',
		'July',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]

	return monthNames[d.getMonth()] + ' ' + d.getFullYear().toString()
}
