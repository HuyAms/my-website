import styled from 'styled-components'
import {ButtonLinkWrapper} from '../../../components/ButtonLink/style'

export const BlogWrapper = styled.div`
	max-width: 400px;
	background-color: ${props => props.theme.colors.lightGray};
	display: flex;
	flex-direction: column;
`

export const BlogImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
`

export const BlogContent = styled.div`
	padding: 2.4rem;
	flex: 1;
`

export const Author = styled.p`
	font-size: ${props => props.theme.fontSizes.sm};

	span {
		font-weight: bold;
	}
`

export const BlogTagList = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`

export const Tag = styled.li`
	font-size: ${props => props.theme.fontSizes.sm};
	color: ${props => props.theme.colors.gray};
	font-weight: bold;

	&:not(:last-child) {
		&:after {
			content: '|';
			padding: 0 0.5rem;
		}
	}
`

export const BlogHeading = styled.h3`
	font-weight: 400;
	margin-bottom: 2.4rem;
`

export const ReadMoreContainer = styled.div`
	text-align: center;
	margin-bottom: 2.4rem;
	margin-top: 2.4rem;
`

export const ReadMore = styled(ButtonLinkWrapper)`
	font-weight: 400;
	text-align: center;
`
