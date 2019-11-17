import React from 'react'
import {ContainerWrapper} from './style'

const Container: React.FunctionComponent = props => {
	return <ContainerWrapper>{props.children}</ContainerWrapper>
}

export default Container
