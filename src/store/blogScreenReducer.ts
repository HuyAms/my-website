import produce from 'immer'
import {AnyAction, Dispatch} from 'redux'
import {createAction} from './util'
import {getBlogScreenEntry} from '../services/contentfulStore'

const actionTypes = {
	FETCH_BLOG_CONTENT_START: 'FETCH_BLOG_CONTENT_START',
	FETCH_BLOG_CONTENT_SUCCESS: 'FETCH_BLOG_CONTENT_SUCCESS',
	FETCH_BLOG_CONTENT_FAIL: 'FETCH_BLOG_CONTENT_FAIL',
}

const actions = {
	getBlogContentStart: createAction(actionTypes.FETCH_BLOG_CONTENT_START),
	getBlogContentSuccess: createAction(actionTypes.FETCH_BLOG_CONTENT_SUCCESS),
	getBlogContentFail: createAction(actionTypes.FETCH_BLOG_CONTENT_FAIL),
}

const initialState = {
	data: null,
	isLoading: false,
	error: null,
}

export const blogScreenReducer = (state = initialState, action: AnyAction) =>
	produce(state, draft => {
		switch (action.type) {
			case actionTypes.FETCH_BLOG_CONTENT_START:
				draft.error = null
				draft.isLoading = true
				break
			case actionTypes.FETCH_BLOG_CONTENT_SUCCESS:
				draft.data = action.payload
				draft.error = null
				draft.isLoading = false
				break
			case actionTypes.FETCH_BLOG_CONTENT_FAIL:
				draft.data = action.payload
				draft.error = action.error
				draft.isLoading = false
				break
		}
	})

export const getBlogScreen = () => (dispatch: Dispatch) => {
	dispatch(actions.getBlogContentStart())

	getBlogScreenEntry()
		.then(data => {
			dispatch(actions.getBlogContentSuccess(data))
		})
		.catch(error => dispatch(actions.getBlogContentFail(error)))
}
