// @flow

import React from 'react'
import styled from 'styled-components'

import Articles from 'views/containers/Articles'

const Wrapper = styled.div`
  width: 100%;
`

const Home = () => (
  <Wrapper>
    <Articles />
  </Wrapper>
)

export {
  Home as default
}
