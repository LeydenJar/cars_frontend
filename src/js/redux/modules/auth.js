import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'



const SET_TOKEN = 'app/auth/SET_TOKEN'
const LOGOUT = 'app/auth/LOGOUT'

export const constants = {
    SET_TOKEN,
    LOGOUT,
}

// ------------------------------------
// Actions
// ------------------------------------
export const setToken = createAction(SET_TOKEN, (token) => ({token}))
export const logout = createAction(
    LOGOUT,
  () => ({})
)

export const actions = {
  setToken,
  logout,
}

export const reducers = {
  [SET_TOKEN]: (state, { payload }) => {return {...state, token: payload.token}},
  [LOGOUT]: (state, { payload }) => {return {...state, token: null}},
}

export const initialState = () => Map({
  token: null,
})

export default handleActions(reducers, initialState())
