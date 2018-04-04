// @flow

import { combineReducers } from 'redux-loop'

import Articles from 'ducks/articles'
import Auth from 'ducks/auth'

export default combineReducers({
  articles: Articles.reducer,
  auth: Auth.reducer
})
