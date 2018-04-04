// @flow

import React from 'react'
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import defaultTheme from 'themes/default'

import Home from 'views/pages/Home'
import Login from 'views/pages/Login'

import Content from 'views/components/Content'
import Header from 'views/components/Header'
import PageWrapper from 'views/components/PageWrapper'

const App = () => (
  <Router>
    <ThemeProvider theme={defaultTheme}>
      <PageWrapper>
        <Header />

        <Content>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/home' />} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Content>
      </PageWrapper>
    </ThemeProvider>
  </Router>
)

export {
  App as default
}
