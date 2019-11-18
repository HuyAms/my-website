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
} from './stlye'

const Project = () => {
	return (
		<ProjectWrapper>
			<ProjectContainer>
				<ProjectImageContainer>
					<ProjectImage
						src="https://user-images.githubusercontent.com/26871154/41097444-98b8ec94-6a60-11e8-9f4b-4c396adf1de9.png"
						alt=""
					/>
				</ProjectImageContainer>
				<ProjectContentContainer>
					<ProjectContent>
						<h2>Minida</h2>
						<ProjectTag>Ios</ProjectTag>
						<ProjectDescription>
							Minida is a application where users can buy and sell secondhand
							items
						</ProjectDescription>
						<FeatureList>
							<FeatureItem>MVP Architecture</FeatureItem>
							<FeatureItem>FaceID/TouchID</FeatureItem>
							<FeatureItem>Networking</FeatureItem>
							<FeatureItem>Animation and custom views</FeatureItem>
						</FeatureList>
					</ProjectContent>
				</ProjectContentContainer>
			</ProjectContainer>
		</ProjectWrapper>
	)
}

export default Project
