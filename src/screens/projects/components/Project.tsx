import React from 'react'
import {
	ProjectWrapper,
	ProjectImageContainer,
	ProjectContentContainer,
	ProjectImage,
	ProjectContent,
	FeatureList,
	ProjectContainer,
	ProjectTag,
	ProjectDescription,
	FeatureItem,
	ButtonReadMore,
} from './stlye'

interface Props {
	title: string
	type: string
	imageUrl: string
	description: string
	readMore?: string
	features: string[]
}

const Project: React.FunctionComponent<Props> = props => {
	const {title, type, imageUrl, description, readMore, features} = props

	const renderReadMore = () => {
		if (readMore) {
			return (
				<ButtonReadMore
					rel="noopener noreferrer"
					target="_blank"
					href={readMore}
				>
					Read more
				</ButtonReadMore>
			)
		}

		return null
	}
	return (
		<ProjectWrapper>
			<ProjectContainer>
				<ProjectImageContainer>
					<ProjectImage src={imageUrl} />
				</ProjectImageContainer>
				<ProjectContentContainer>
					<ProjectContent>
						<h2>{title}</h2>
						<ProjectTag>{type}</ProjectTag>
						<ProjectDescription>{description}</ProjectDescription>
						<FeatureList>
							{features.map(feature => (
								<FeatureItem key={feature}>{feature}</FeatureItem>
							))}
						</FeatureList>
						{renderReadMore()}
					</ProjectContent>
				</ProjectContentContainer>
			</ProjectContainer>
		</ProjectWrapper>
	)
}

export default Project
