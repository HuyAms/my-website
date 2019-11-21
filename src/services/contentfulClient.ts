import {ContentfulClientApi, createClient} from 'contentful'

const client: ContentfulClientApi = createClient({
	space: '0q01fldk5izx',
	accessToken: 'V3d6DzTlI0JDDXUHC40uq5CIjX49UWH7bbxQE3TWGZ4',
	host: 'cdn.contentful.com',
})

export const getEntry = (entryId: string) => {
	return client.getEntry(entryId).then(payload => {
		return payload.fields
	})
}
