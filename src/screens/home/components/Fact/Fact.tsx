import React from 'react'
import {
	FactWrapper,
	FactSection,
	FactHeader,
	FactContent,
	FactImage,
} from './style'
import Container from '../../../../components/Container/Container'
import HeaderText from '../../../../components/HeaderText/HeaderText'

interface Props {
	heading: string
	content: string
	imageUrl: string
}

const Fact: React.FunctionComponent<Props> = ({heading, content, imageUrl}) => {
	return (
		<FactWrapper>
			<Container>
				<FactSection>
					<FactHeader>
						<FactImage src={imageUrl} />
					</FactHeader>
					<FactContent>
						<HeaderText
							heading={heading}
							subheading={content}
							textCenter={false}
							width={'60%'}
						/>
					</FactContent>
				</FactSection>
			</Container>
		</FactWrapper>
	)
}

export default Fact
