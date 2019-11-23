import React from 'react'
import {
	ResumeSection,
	ResumeWrapper,
	ResumeHeader,
	ResumeContent,
} from './style'
import Container from '../../../../components/Container/Container'
import WorkExperience from './WorkExperience/WorkExperience'

interface WorkExp {
	title: string
	subtitle: string
	description: string
	start?: Date
	end?: Date
}

export interface ResumeItem {
	heading: string
	workExps: WorkExp[]
}

interface Props {
	resumeItems: ResumeItem[]
}

const Resume: React.FunctionComponent<Props> = ({resumeItems}) => {
	const renderResumeSections = () => {
		return resumeItems.map(resumeItem => (
			<ResumeSection key={resumeItem.heading}>
				<ResumeHeader>
					<h2>{resumeItem.heading}</h2>
				</ResumeHeader>
				<ResumeContent>
					{resumeItem.workExps.map(exp => (
						<WorkExperience
							key={exp.title}
							title={exp.title}
							subtitle={exp.subtitle}
							description={exp.description}
						/>
					))}
				</ResumeContent>
			</ResumeSection>
		))
	}

	return (
		<ResumeWrapper>
			<Container>{renderResumeSections()}</Container>
		</ResumeWrapper>
	)
}

export default Resume
