import produce from 'immer'
import {AnyAction, Dispatch} from 'redux'
import {createAction} from './util'
import {fetchBlogs} from '../services/api'

const actionTypes = {
	FETCH_BLOGS_START: 'FETCH_BLOGS_START',
	FETCH_BLOGS_SUCCESS: 'FETCH_BLOGS_SUCCESS',
	FETCH_BLOGS_FAIL: 'FETCH_BLOGS_FAIL',
}

const actions = {
	getBlogsStart: createAction(actionTypes.FETCH_BLOGS_START),
	getBlogsSuccess: createAction(actionTypes.FETCH_BLOGS_SUCCESS),
	getBlogsFail: createAction(actionTypes.FETCH_BLOGS_FAIL),
}

const initialState = {
	data: null,
	isLoading: false,
	error: null,
}

export const blogsReducer = (state = initialState, action: AnyAction) =>
	produce(state, draft => {
		switch (action.type) {
			case actionTypes.FETCH_BLOGS_START:
				draft.error = null
				draft.isLoading = true
				break
			case actionTypes.FETCH_BLOGS_SUCCESS:
				draft.data = action.payload
				draft.error = null
				draft.isLoading = false
				break
			case actionTypes.FETCH_BLOGS_FAIL:
				draft.data = action.payload
				draft.error = action.error
				draft.isLoading = false
				break
		}
	})

export const getBlogs = () => (dispatch: Dispatch) => {
	dispatch(actions.getBlogsStart())

	fetchBlogs()
		.then(data => {
			dispatch(actions.getBlogsSuccess(data))
		})
		.catch(error => dispatch(actions.getBlogsFail(error)))
}
