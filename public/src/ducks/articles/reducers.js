// @flow

import {
  combineReducers,
  Cmd,
  loop
} from 'redux-loop'

import * as actions from './actions'
import * as sideEffects from './sideEffects'

const list = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ARTICLES_FETCH_ALL': {
      return loop(
        state,
        Cmd.run(sideEffects.fetchArticles, {
          successActionCreator: actions.fetchAllSuccess,
          failActionCreator: actions.fetchAllError
        })
      )
    }

    case 'ARTICLES_FETCH_ALL_SUCCESS': {
      const { data } = action.payload.res

      return data
    }

    default: {
      return state
    }
  }
}

export default combineReducers({
  list
})
