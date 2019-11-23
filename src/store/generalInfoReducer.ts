import produce from 'immer'
import {AnyAction, Dispatch} from 'redux'
import {createAction} from './util'
import {getGeneralInfoEntry} from '../services/contentfulStore'

const actionTypes = {
	FETCH_GENERAL_INFO_START: 'FETCH_GENERAL_INFO_START',
	FETCH_GENERAL_INFO_SUCCESS: 'FETCH_GENERAL_INFO_SUCCESS',
	FETCH_GENERAL_INFO_FAIL: 'FETCH_GENERAL_INFO_FAIL',
}

const actions = {
	getGeneralInfoStart: createAction(actionTypes.FETCH_GENERAL_INFO_START),
	getGeneralInfoSuccess: createAction(actionTypes.FETCH_GENERAL_INFO_SUCCESS),
	getGeneralInfoFail: createAction(actionTypes.FETCH_GENERAL_INFO_FAIL),
}

const initialState = {
	data: null,
	isLoading: false,
	error: null,
}

export const generalInfoReducer = (state = initialState, action: AnyAction) =>
	produce(state, draft => {
		switch (action.type) {
			case actionTypes.FETCH_GENERAL_INFO_START:
				draft.error = null
				draft.isLoading = true
				break
			case actionTypes.FETCH_GENERAL_INFO_SUCCESS:
				draft.data = action.payload
				draft.error = null
				draft.isLoading = false
				break
			case actionTypes.FETCH_GENERAL_INFO_FAIL:
				draft.data = action.payload
				draft.error = action.error
				draft.isLoading = false
				break
		}
	})

export const getGeneralInfo = () => (dispatch: Dispatch) => {
	dispatch(actions.getGeneralInfoStart())

	getGeneralInfoEntry()
		.then(data => {
			dispatch(actions.getGeneralInfoSuccess(data))
		})
		.catch(error => dispatch(actions.getGeneralInfoFail(error)))
}
