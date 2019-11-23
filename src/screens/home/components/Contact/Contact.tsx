import React from 'react'
import {
	ContactWrapper,
	ContactSection,
	ContactContent,
	ContactHeader,
	ContactInfo,
	Map,
	ContactTitle,
	ContactLink,
} from './style'
import Container from '../../../../components/Container/Container'

interface Props {
	address: string
	email: string
	heading: string
	socialMedia: string
	mapUrl: string
	phoneNumber: string
}

const Contact: React.FunctionComponent<Props> = ({
	address,
	email,
	heading,
	socialMedia,
	phoneNumber,
	mapUrl,
}) => {
	return (
		<ContactWrapper>
			<Container>
				<ContactSection>
					<ContactHeader>
						<h2>{heading}</h2>
					</ContactHeader>
					<ContactContent>
						<ContactInfo>
							<p>
								<ContactTitle>Address: </ContactTitle>
								{address}
							</p>
							<p>
								<ContactTitle>Email: </ContactTitle>
								<ContactLink href={`mailto:${email}`}>{email}</ContactLink>
							</p>
							<p>
								<ContactTitle>Phone: </ContactTitle>
								{phoneNumber}
							</p>
							<p>
								<ContactTitle>LinkedIn: </ContactTitle>
								<ContactLink
									href={socialMedia}
									rel="noopener noreferrer"
									target="_blank"
								>
									Huy Trinh
								</ContactLink>
							</p>
						</ContactInfo>
						<Map title="map" frameBorder="0" src={mapUrl} allowFullScreen></Map>
					</ContactContent>
				</ContactSection>
			</Container>
		</ContactWrapper>
	)
}

export default Contact
