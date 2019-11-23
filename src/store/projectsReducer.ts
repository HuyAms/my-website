import produce from 'immer'
import {AnyAction, Dispatch} from 'redux'
import {createAction} from './util'
import {getProjectsEntry} from '../services/contentfulStore'

const actionTypes = {
	FETCH_PROJECTS_START: 'FETCH_PROJECTS_START',
	FETCH_PROJECTS_SUCCESS: 'FETCH_PROJECTS_SUCCESS',
	FETCH_PROJECTS_FAIL: 'FETCH_PROJECTS_FAIL',
}

const actions = {
	getProjectsStart: createAction(actionTypes.FETCH_PROJECTS_START),
	getProjectsSuccess: createAction(actionTypes.FETCH_PROJECTS_SUCCESS),
	getProjectFail: createAction(actionTypes.FETCH_PROJECTS_FAIL),
}

const initialState = {
	data: null,
	isLoading: false,
	error: null,
}

export const projectsReducer = (state = initialState, action: AnyAction) =>
	produce(state, draft => {
		switch (action.type) {
			case actionTypes.FETCH_PROJECTS_START:
				draft.error = null
				draft.isLoading = true
				break
			case actionTypes.FETCH_PROJECTS_SUCCESS:
				draft.data = action.payload
				draft.error = null
				draft.isLoading = false
				break
			case actionTypes.FETCH_PROJECTS_FAIL:
				draft.data = action.payload
				draft.error = action.error
				draft.isLoading = false
				break
		}
	})

export const getProjects = () => (dispatch: Dispatch) => {
	dispatch(actions.getProjectsStart())

	getProjectsEntry()
		.then(data => {
			dispatch(actions.getProjectsSuccess(data))
		})
		.catch(error => dispatch(actions.getProjectFail(error)))
}
