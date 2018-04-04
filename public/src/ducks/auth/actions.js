// @flow

export const login = (name: string, password: string) => {
  return {
    type: 'AUTH_LOGIN',
    payload: { name, password }
  }
}

export const loginError = (err: Object) => {
  return {
    type: 'AUTH_LOGIN_ERROR',
    payload: err
  }
}

export const loginSuccess = (res: Object) => {
  return {
    type: 'AUTH_LOGIN_SUCCESS',
    payload: res.data
  }
}
