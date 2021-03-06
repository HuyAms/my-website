import React from 'react'
import {
	ResumeSection,
	ResumeWrapper,
	ResumeHeader,
	ResumeContent,
} from './style'
import Container from '../../../../components/Container/Container'
import WorkExperience from './WorkExperience/WorkExperience'
import {ButtonContainer, ButtonMyProject} from './style'
import {Link} from '@reach/router'

interface WorkExp {
	title: string
	subtitle: string
	description: string
	start: Date
	end: Date
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
							start={exp.start}
							end={exp.end}
						/>
					))}
				</ResumeContent>
			</ResumeSection>
		))
	}

	return (
		<ResumeWrapper>
			<Container>
				<div>{renderResumeSections()}</div>
				<ButtonContainer>
					<ButtonMyProject as={Link} to="/projects">
						View My Projects
					</ButtonMyProject>
				</ButtonContainer>
			</Container>
		</ResumeWrapper>
	)
}

export default Resume
