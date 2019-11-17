import styled from 'styled-components'
import {media} from '../../../../styles/utils'

export const TechnicalSkillsWrapper = styled.section`
	padding: 9.6rem 1rem;
`

export const TechnicalSkillsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	justify-items: center;
	grid-row-gap: 4.8rem;

	${media.tabLand} {
		grid-template-columns: repeat(3, 1fr);
	}

	${media.phone} {
		grid-template-columns: repeat(2, 1fr);
	}
`

export const TechnicalSkillsImage = styled.img`
	width: 10rem;
	height: auto;
	object-fit: contain;

	opacity: 0.9;
	transition: all 0.2s ease-out;
	cursor: pointer;

	:hover {
		opacity: 1;
		transform: scale(1.2);
	}
`
