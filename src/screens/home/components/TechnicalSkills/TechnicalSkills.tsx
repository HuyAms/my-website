import React from 'react'
import HeaderText from '../../../../components/HeaderText/HeaderText'
import {
	ButtonContainer,
	ButtonMyProject,
	TechnicalSkillsContainer,
	TechnicalSkillsImage,
	TechnicalSkillsWrapper,
} from './style'
import Container from '../../../../components/Container/Container'
import {Link} from '@reach/router'

interface Props {
	heading: string
	subheading: string
	imgSources: string[]
}

const TechnicalSkills: React.FunctionComponent<Props> = ({
	heading,
	subheading,
	imgSources,
}) => {
	return (
		<TechnicalSkillsWrapper>
			<Container>
				<HeaderText heading={heading} subheading={subheading} />
				<TechnicalSkillsContainer>
					{imgSources.map(imgSrc => (
						<TechnicalSkillsImage key={imgSrc} src={imgSrc} alt="" />
					))}
				</TechnicalSkillsContainer>
				<ButtonContainer>
					<ButtonMyProject as={Link} to="/projects">
						My Projects
					</ButtonMyProject>
				</ButtonContainer>
			</Container>
		</TechnicalSkillsWrapper>
	)
}

export default TechnicalSkills
