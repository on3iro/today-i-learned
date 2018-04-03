// flow

import axios from 'axios'

import { partial } from 'functionstein'

export const fetchRequest = (
  requestFunc: Function,
  url: string,
  config: ?Object
): Promise<*> => {
  return requestFunc(url, config)
}

export const request = (
  requestFunc: Function,
  url: string,
  delta: Object,
  config: ?Object
): Promise<*> => {
  return requestFunc(url, delta, config)
}

export const getRequest = partial(fetchRequest, axios.get)
export const postRequest = partial(request, axios.post)
