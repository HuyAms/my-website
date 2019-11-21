import styled from 'styled-components'

export const WorkExperienceWrapper = styled.div`
	padding: 1rem;

	:not(:last-child) {
		margin-bottom: 2.4rem;
	}
`

export const Title = styled.h3`
	font-size: ${props => props.theme.fontSizes.lmd};
`

export const Subtitle = styled.h4`
	font-size: ${props => props.theme.fontSizes.md};
	margin-bottom: 1.2rem;
	text-transform: uppercase;
`

export const Time = styled.span`
	font-weight: 300;
	margin-bottom: 2.4rem;
	display: block;
`
