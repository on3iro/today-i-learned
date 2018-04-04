// @flow

import { API_URL } from 'config/config'
import { getRequest } from 'config/sideEffects'

export const fetchArticles = ():Promise<*> => {
  const url = `${API_URL}/articles`

  return getRequest(url, { timeout: 1000 })
}
