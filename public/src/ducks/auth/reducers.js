// @flow

import {
  combineReducers,
  Cmd,
  loop
} from 'redux-loop'

import * as actions from './actions'
import * as sideEffects from './sideEffects'

const authenticated = (
  state: false,
  action: Object
) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      const { name, password } = action.payload

      return loop(
        state,
        Cmd.run(sideEffects.postLoginCredentials, {
          args: [{name, password}],
          successActionCreator: actions.loginSuccess,
          failErrorCreator: (err) => actions.loginError(err)
        })
      )
    }

    case 'AUTH_LOGIN_SUCCESS': {
      return true
    }

    case 'AUTH_LOGIN_ERROR': {
      return false
    }

    default: {
      return state
    }
  }
}

export default combineReducers({
  authenticated
})
