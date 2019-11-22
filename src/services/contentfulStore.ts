import {getEntry} from './contentfulClient'

export const getHomeEntry = () => {
	return getEntry('2fFLPCz6XCAgVH4ZnRfJiV', {include: 2})
}

export const getProjectsEntry = () => {
	return getEntry('5F5eFgPo8dUgHpqpVAYXlQ')
}
