import React from 'react'
import {Subtitle, Time, Title, WorkExperienceWrapper} from './style'
import {formatDate} from '../../../../../utils/utils'

interface Props {
	title: string
	subtitle?: string
	description?: string
	start: Date
	end: Date
}

const WorkExperience: React.FunctionComponent<Props> = ({
	title,
	subtitle,
	description,
	start,
	end,
}) => {
	return (
		<WorkExperienceWrapper>
			<Subtitle>{subtitle}</Subtitle>
			<Title>{title}</Title>
			<Time>
				{formatDate(start)} - {end ? formatDate(end) : 'Present'}
			</Time>
			<p>{description}</p>
		</WorkExperienceWrapper>
	)
}

export default WorkExperience
