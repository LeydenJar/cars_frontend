import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'



export default class Root extends React.PureComponent {
  get content() {
    const { routes, history } = this.props

    return <Router history={history}>{routes}</Router>
  }

  render() {
    const { store, persistor} = this.props

    return (
      
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {this.content}
          </PersistGate>
        </Provider>
      
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
}
