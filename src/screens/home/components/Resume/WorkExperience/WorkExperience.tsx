import React from 'react'
import {Subtitle, Time, Title, WorkExperienceWrapper} from './style'

interface Props {
	title: string
	subtitle?: string
	description?: string
}

const WorkExperience: React.FunctionComponent<Props> = ({
	title,
	subtitle,
	description,
}) => {
	return (
		<WorkExperienceWrapper>
			<Subtitle>{subtitle}</Subtitle>
			<Title>{title}</Title>
			<Time>Sep 2012 - May 2015</Time>
			<p>{description}</p>
		</WorkExperienceWrapper>
	)
}

export default WorkExperience
