// @flow

import { API_URL } from 'config/config'
import { postRequest } from 'config/sideEffects'

export const postLoginCredentials = (
  credentials: { name: string, password: string }
) => postRequest(`${API_URL}/auth`, credentials, {
  headers: { 'Content-Type': 'application/json' },
  timeout: 1000
})
