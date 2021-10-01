import { createSelector } from 'reselect'

const tokenDataSelector = (state) => state.auth

const resultSelector = createSelector(
    tokenDataSelector,
  (payload) => payload.get('token')
)

export const tokenSelector = (state) => ({
  token: resultSelector(state),
})
