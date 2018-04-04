// @flow

import * as React from 'react'

import Ul from 'views/components/Ul'

const renderArticles = (articles) => articles.map(article => {
  return (
    <li>
      { article.title }, { article.author }

      { article.body }
    </li>
  )
})

const List = ({ articles }: Object) => (
  <Ul>
    { renderArticles(articles) }
  </Ul>
)

export default List
