import React from 'react'
import {
	ProjectWrapper,
	ProjectImageContainer,
	ProjectContentContainer,
	ProjectImage,
	ProjectContent,
	FeatureList,
	ProjectContainer,
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
						<span>Ios</span>
						<p>
							Minida is a application where users can buy and sell secondhand
							items
						</p>
						<FeatureList>
							<li>MVP Architecture</li>
							<li>FaceID/TouchID</li>
							<li>Networking</li>
							<li>Animation and custom views</li>
						</FeatureList>
					</ProjectContent>
				</ProjectContentContainer>
			</ProjectContainer>
		</ProjectWrapper>
	)
}

export default Project
