import React from 'react'
import {
	ContactWrapper,
	ContactSection,
	ContactContent,
	ContactHeader,
	ContactInfo,
	Map,
	ContactTitle,
} from './style'
import Container from '../../../../components/Container/Container'

const Contact = () => {
	return (
		<ContactWrapper>
			<Container>
				<ContactSection>
					<ContactHeader>
						<h2>Let's work together</h2>
					</ContactHeader>
					<ContactContent>
						<ContactInfo>
							<p>
								<ContactTitle>Address:</ContactTitle> Kilonrinne 10F 140, 02610,
								Espoo, Finland
							</p>
							<p>
								<ContactTitle>Email:</ContactTitle> dinhhuyams@gmail.com
							</p>
							<p>
								<ContactTitle>LinkedIn:</ContactTitle> Trinh Dinh Huy
							</p>
						</ContactInfo>
						<Map title="map" frameBorder="0" src={''} allowFullScreen></Map>
					</ContactContent>
				</ContactSection>
			</Container>
		</ContactWrapper>
	)
}

export default Contact
