import styled from 'styled-components'
import {media} from '../../../../styles/utils'
import {ButtonLinkWrapper} from '../../../../components/ButtonLink/style'

export const ResumeWrapper = styled.section`
	padding: 9.6rem 1rem;
	background-color: ${props => props.theme.appColors.darkBackground};
`

export const ResumeSection = styled.div`
	display: flex;

	:not(:last-child) {
		margin-bottom: 4.8rem;
	}

	${media.phone} {
		flex-direction: column;
	}
`

export const ResumeHeader = styled.div`
	flex: 1;

	${media.phone} {
		text-align: center;
		margin-bottom: 4.8rem;
	}
`

export const ResumeContent = styled.div`
	flex: 2;
`

export const ButtonMyProject = styled(ButtonLinkWrapper)``

export const ButtonContainer = styled.div`
	text-align: center;
	margin-top: 9.6rem;
`
