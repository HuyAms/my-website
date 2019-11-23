import React from 'react'
import Header from '../components/Header/Header'
import {connect} from 'react-redux'
import {getGeneralInfo} from '../store/generalInfoReducer'

interface Props {
	getGeneralInfo: () => any
	generalInfo
}

const AppLayout: React.FunctionComponent<Props> = ({
	getGeneralInfo,
	generalInfo,
	children,
}) => {
	React.useEffect(() => {
		if (!generalInfo.data) {
			getGeneralInfo()
		}
	}, [generalInfo.data])
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

const mapStateToProps = ({generalInfo}) => {
	return {generalInfo}
}

const mapDispatchToProps = {
	getGeneralInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout)
