import styled from 'styled-components'
import {ContainerWrapper} from '../../../components/Container/style'
import {media} from '../../../styles/utils'
import {ButtonLinkWrapper} from '../../../components/ButtonLink/style'

export const ProjectWrapper = styled.div`
	padding: 9.6rem 1rem;
`

export const ProjectContainer = styled(ContainerWrapper)`
	display: flex;

	${media.phone} {
		flex-direction: column;
	}
`

export const ProjectImageContainer = styled.div`
	flex: 1;

	display: flex;
	justify-content: flex-end;

	${media.phone} {
		justify-content: flex-start;
		margin-bottom: 4.8rem;
	}
`

export const ProjectContentContainer = styled.div`
	flex: 1;
`

export const ProjectContent = styled.div`
	width: 60%;
	margin: 0 auto;
	padding: 1rem;

	${media.phone} {
		width: 100%;
	}
`

export const ProjectImage = styled.img`
	max-width: 100%;
	max-height: 55rem;
`

export const ProjectTag = styled.span`
	text-transform: uppercase;
	font-weight: bold;
	margin-bottom: 1.2rem;
	display: block;
	color: ${props => props.theme.colors.gray};
`

export const ProjectDescription = styled.p`
	margin-bottom: 2.4rem;
`

export const FeatureList = styled.ul`
	margin-left: 2rem;
	margin-bottom: 4.8rem;
`

export const FeatureItem = styled.li`
	margin-bottom: 1rem;
`

export const ButtonReadMore = styled(ButtonLinkWrapper)`
	${media.phone} {
		width: 100%;
		text-align: center;
	}
`
