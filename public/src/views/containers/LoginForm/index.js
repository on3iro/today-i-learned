// @flow

import {
  compose,
  withStateHandlers
} from 'recompose'

import LoginForm from './LoginForm'

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
  withInputHandlers
)

export default enhance(LoginForm)
