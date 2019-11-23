import React from 'react'
import {
	Author,
	BlogContent,
	BlogHeading,
	BlogImage,
	BlogTagList,
	BlogWrapper,
	ReadMoreContainer,
	Tag,
} from './style'
import ButtonLink from '../../../components/ButtonLink/ButtonLink'
import {ButtonLinkWrapper} from '../../../components/ButtonLink/style'

interface Props {
	heading: string
	coverImageUrl: string
	readMoreUrl: string
	author: string
	tags: string[]
}

const Blog: React.FunctionComponent<Props> = ({
	heading,
	coverImageUrl,
	readMoreUrl,
	author,
	tags,
}) => {
	return (
		<BlogWrapper>
			<a rel="noopener noreferrer" href={readMoreUrl} target="_blank">
				<BlogImage src={coverImageUrl} />
			</a>
			<BlogContent>
				<BlogHeading>{heading}</BlogHeading>
				<Author>
					Written by <span>{author}</span>
				</Author>
				<BlogTagList>
					{tags.map(tag => (
						<Tag key={tag}>{tag}</Tag>
					))}
				</BlogTagList>
			</BlogContent>
			<ReadMoreContainer>
				<ButtonLink target="_blank" href={readMoreUrl}>
					Read more
				</ButtonLink>
			</ReadMoreContainer>
		</BlogWrapper>
	)
}

export default Blog
