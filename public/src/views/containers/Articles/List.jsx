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
  width: 100%;
`

const ArticleButton = styled.button`
  display: block;

  margin-bottom: 10px;
  border: none;
  padding: 10px;
  width: 100%;

  background: ${props => props.theme.white};

  box-shadow: 2px 2px 2px #aaa;

  &:hover {
    background: ${props => props.theme.bgPrimary};
    color: ${props => props.theme.white};

    cursor: pointer;
  }
`

const Title = styled.span`
  color: ${props => props.isSelected ? props.theme.secondary : 'inherit'};
`

const List = ({ articles, selectArticle, selectedArticle }: Object) => (
  <ArticlesUl>
    {
      articles.map(article => {
        const isSelected = article.id === selectedArticle.id

        return (
          <Li key={article.id}>
            <ArticleButton onClick={() => selectArticle(article.id)}>
              <Title isSelected={isSelected}>
                { article.title },
                { article.authorName }
              </Title>
            </ArticleButton>
          </Li>
        )
      })
    }
  </ArticlesUl>
)

export default List
