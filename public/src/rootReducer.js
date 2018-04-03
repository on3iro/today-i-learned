// @flow

import { combineReducers } from 'redux-loop'

import Articles from 'ducks/articles'

export default combineReducers({
  articles: Articles.reducer
})
