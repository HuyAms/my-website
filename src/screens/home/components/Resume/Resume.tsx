import React from 'react'
import {
	ResumeSection,
	ResumeWrapper,
	ResumeHeader,
	ResumeContent,
} from './style'
import Container from '../../../../components/Container/Container'
import WorkExperience from './WorkExperience/WorkExperience'

const mockExperience = {
	title: 'Software developer',
	subtitle: 'Make Helsinki',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod augue et libero rhoncus dictum ut sit amet libero. Proin at est vitae lacus varius cursus nec nec lectus. Duis ac ipsum dui. Sed consequat rhoncus aliquet. Fusce ut nisl ligula. Nam varius mollis felis, vulputate pellentesque turpis interdum non.',
}

const mockEducation = {
	title: 'Metropolia University of Applied Science',
	description: 'Infomation technology - Sep 2012 - May 2015',
}

const Resume = () => {
	return (
		<ResumeWrapper>
			<Container>
				<ResumeSection>
					<ResumeHeader>
						<h2>Work experience</h2>
					</ResumeHeader>
					<ResumeContent>
						<WorkExperience
							title={mockExperience.title}
							subtitle={mockExperience.subtitle}
							description={mockExperience.description}
						/>
						<WorkExperience
							title={mockExperience.title}
							subtitle={mockExperience.subtitle}
							description={mockExperience.description}
						/>
					</ResumeContent>
				</ResumeSection>
				<ResumeSection>
					<ResumeHeader>
						<h2>Education</h2>
					</ResumeHeader>
					<ResumeContent>
						<WorkExperience
							title={mockEducation.title}
							description={mockEducation.description}
						/>
						<WorkExperience
							title={mockEducation.title}
							description={mockEducation.description}
						/>
						<WorkExperience
							title={mockEducation.title}
							description={mockEducation.description}
						/>
					</ResumeContent>
				</ResumeSection>
			</Container>
		</ResumeWrapper>
	)
}

export default Resume
