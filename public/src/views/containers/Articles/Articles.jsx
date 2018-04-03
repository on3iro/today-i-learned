// @flow

import * as React from 'react'

import Ul from 'views/components/Ul'

const renderArticles = (articles) => articles.map(article => {
  return (
    <div>
      { article.title } { article.author }

      { article.body }
    </div>
  )
})

const Articles = ({ articles }: Object) => (
  <Ul>
    { renderArticles(articles) }
  </Ul>
)

export default Articles
