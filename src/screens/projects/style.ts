import styled from 'styled-components'
import {ProjectWrapper} from './components/stlye'

export const ProjectListWrapper = styled.div`
	${ProjectWrapper}:nth-child(even) {
		background-color: ${props => props.theme.appColors.darkBackground};
	}
`
