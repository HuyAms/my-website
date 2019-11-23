import React from 'react'
import HeaderText from '../../../../components/HeaderText/HeaderText'
import {
	TechnicalSkillsContainer,
	TechnicalSkillsImage,
	TechnicalSkillsWrapper,
} from './style'

import Container from '../../../../components/Container/Container'

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
			</Container>
		</TechnicalSkillsWrapper>
	)
}

export default TechnicalSkills
