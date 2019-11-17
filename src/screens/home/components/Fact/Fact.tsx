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

const mockFact = {
	header: 'Fun facts about myself',
	content:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante purus, condimentum auctor eros aliquam, euismod iaculis erat. Vestibulum in accumsan libero. Etiam mi orci, aliquam ac nisi ac, tempor sodales mi. Nunc ut consequat turpis. Aenean a commodo ligula. Suspendisse consequat blandit viverra. Suspendisse vel dolor magna. Duis eu erat facilisis, molestie ligula ac, posuere felis.',
}

const Fact = () => {
	return (
		<FactWrapper>
			<Container>
				<FactSection>
					<FactHeader>
						<FactImage
							src="https://images.unsplash.com/photo-1530404124886-4861adb62ac7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
							alt=""
						/>
					</FactHeader>
					<FactContent>
						<HeaderText
							heading={mockFact.header}
							subheading={mockFact.content}
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
