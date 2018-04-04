// @flow

import * as React from 'react'
import styled from 'styled-components'

import Ul from 'views/components/Ul'

const ArticlesUl = Ul.extend`
  margin: 0 20px 0 0;
  border-right: 2px solid #eee;
  padding-right: 20px;
  width: 50%;
`

const Li = styled.li`
  display: block;

  margin-bottom: 10px;
  padding: 10px;

  background: ${props => props.theme.white};

  box-shadow: 2px 2px 2px #aaa;
`

const renderArticles = (articles) => articles.map(article => {
  return (
    <Li>
      { article.title }, { article.authorName }
    </Li>
  )
})

const List = ({ articles }: Object) => (
  <ArticlesUl>
    { renderArticles(articles) }
  </ArticlesUl>
)

export default List
