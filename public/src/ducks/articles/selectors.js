// @flow

import { createSelector } from 'reselect'

export const getArticles = (state: Object) => state.articles.list
export const getSelectedArticleId = (state: Object) => state.articles.selected

export const getSelectedArticle = createSelector(
  [ getArticles, getSelectedArticleId ],
  (articles, selected) => articles.find(a => a.id === selected)
)
