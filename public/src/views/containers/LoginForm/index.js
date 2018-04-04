// @flow

import { connect } from 'react-redux'

import {
  compose,
  withStateHandlers
} from 'recompose'

import Auth from 'ducks/auth'

import LoginForm from './LoginForm'

// Redux
const mapStateToProps = (state, props) => {
  return {
  }
}

const dispatchProps = {
  login: Auth.actions.login
}

const withRedux = connect(mapStateToProps, dispatchProps)

// Statehandlers
const makeHandleInput = (property) => () => (event) => ({
  [property]: event.target.value
})
const withInputHandlers = withStateHandlers(
  () => ({
    name: '',
    password: ''
  }), {
    handleName: makeHandleInput('name'),
    handlePassword: makeHandleInput('password')
  }
)

// Enhancer
const enhance = compose(
  withRedux,
  withInputHandlers
)

export default enhance(LoginForm)
