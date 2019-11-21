export interface Action<T> {
	type: string
	payload?: T
	error?: any
}

export const createAction = <T>(type: string) => {
	return (payload?: any, error?: any): Action<T> => {
		return {
			type,
			payload,
			error,
		}
	}
}
