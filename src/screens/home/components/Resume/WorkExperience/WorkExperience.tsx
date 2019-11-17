import React from 'react'
import {Subtitle, Title, WorkExperienceWrapper} from './style'

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
			<p>{description}</p>
		</WorkExperienceWrapper>
	)
}

export default WorkExperience
