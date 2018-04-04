// @flow

import * as React from 'react'
import styled from 'styled-components'

import Detail from './Detail'
import List from './List'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: flex-start;

  width: 100%;
`

type Article = {
  title: string,
  body: string,
  authorName: string
}

type Props = {
  articles: Array<Article>
}

const Articles = ({ articles }: Props) => (
  <Wrapper>
    <List articles={articles} />
    <Detail />
  </Wrapper>
)

export default Articles
