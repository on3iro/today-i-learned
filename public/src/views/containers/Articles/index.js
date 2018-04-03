// @flow

import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import Articles from 'ducks/articles'

import ArticlesComponent from './Articles.jsx'

// Redux
const mapStateToProps = (state, props) => {
  const articles = Articles.selectors.getArticles(state)

  return {
    articles
  }
}

const dispatchProps = {
  fetchArticles: Articles.actions.fetchAll
}

const withRedux = connect(mapStateToProps, dispatchProps)

// Lifecycle
const withFetchingArticles = lifecycle({
  componentDidMount () {
    if (!this.props.articles.length) {
      this.props.fetchArticles()
    }
  }
})

// Enhancer
const enhance = compose(
  withRedux,
  withFetchingArticles
)

export default enhance(ArticlesComponent)
