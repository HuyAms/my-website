import {getEntries, getEntry} from './contentfulClient'

export const getHomeScreenEntry = () => {
	return getEntry('2fFLPCz6XCAgVH4ZnRfJiV', {include: 2})
}

export const getProjectsScreenEntry = () => {
	return getEntry('5F5eFgPo8dUgHpqpVAYXlQ')
}

export const getBlogScreenEntry = () => {
	return getEntry('4TbRnIGtE1IuNezkrf6tqs')
}

export const getProjectsEntry = () => {
	return getEntries({content_type: 'project'})
}

export const getGeneralInfoEntry = () => {
	return getEntry('4Pegz93N3Ab1H7IVTktGUF')
}
