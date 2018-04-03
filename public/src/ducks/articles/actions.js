// @flow

export const fetchAll = () => {
  return {
    type: 'ARTICLES_FETCH_ALL'
  }
}

export const fetchAllSuccess = (res: Object) => {
  return {
    type: 'ARTICLES_FETCH_ALL_SUCCESS',
    payload: { res }
  }
}

export const fetchAllError = (err: Object) => {
  return {
    type: 'ARTICLES_FETCH_ALL_ERROR',
    payload: { err }
  }
}
