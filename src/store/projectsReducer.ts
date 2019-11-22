import produce from 'immer'
import {AnyAction, Dispatch} from 'redux'
import {createAction} from './util'
import {getHomeEntry} from '../services/contentfulStore'

const actionTypes = {
	FETCH_PROJECTS_SCREEN_START: 'FETCH_PROJECTS_SCREEN_START',
	FETCH_PROJECTS_SCREEN_SUCCESS: 'FETCH_PROJECTS_SCREEN_SUCCESS',
	FETCH_PROJECTS_SCREEN_FAIL: 'FETCH_PROJECTS_SCREEN_FAIL',
}

const actions = {
	getProjectsScreenStart: createAction(actionTypes.FETCH_PROJECTS_SCREEN_START),
	getProjectsScreenSuccess: createAction(
		actionTypes.FETCH_PROJECTS_SCREEN_SUCCESS,
	),
	getProjectScreentFail: createAction(actionTypes.FETCH_PROJECTS_SCREEN_FAIL),
}

const initialState = {
	data: null,
	isLoading: false,
	error: null,
}

export const projectsScreenReducer = (
	state = initialState,
	action: AnyAction,
) =>
	produce(state, draft => {
		switch (action.type) {
			case actionTypes.FETCH_PROJECTS_SCREEN_START:
				draft.error = null
				draft.isLoading = true
				break
			case actionTypes.FETCH_PROJECTS_SCREEN_SUCCESS:
				draft.data = action.payload
				draft.error = null
				draft.isLoading = false
				break
			case actionTypes.FETCH_PROJECTS_SCREEN_FAIL:
				draft.data = action.payload
				draft.error = action.error
				draft.isLoading = false
				break
		}
	})

export const getProjectsScreen = () => (dispatch: Dispatch) => {
	dispatch(actions.getProjectsScreenStart())

	getHomeEntry()
		.then(data => {
			dispatch(actions.getProjectsScreenSuccess(data))
		})
		.catch(error => dispatch(actions.getProjectScreentFail(error)))
}
