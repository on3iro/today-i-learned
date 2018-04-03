// @flow

import { combineReducers } from 'redux-loop'

const list = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ARTICLES_FETCH_ALL': {
      // TODO
      return state
    }

    default: {
      return state
    }
  }
}

export default combineReducers({
  list
})
