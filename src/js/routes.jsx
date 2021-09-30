import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"

import LazyLoading from "common/components/LazyLoading"

import styles from "../style/index.css"

// This is show case how you can lazy loading component
const ExampleRouteHandler = LazyLoading(() => import("views/example"))
// const Header = LazyLoading(() => import("common/components/Header/Header"))

// This show case how you can access routing info in your component
// const HeaderWithRouter = withRouter(props => <Header {...props} />)

module.exports = (
  <div className={styles.container}>
    {/* <HeaderWithRouter /> */}
    {/* <hr /> */}
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={ExampleRouteHandler} />

        <Route
          path="/login"
          component={LazyLoading(() => import("views/login"))}
        />
        <Route path="*" component={ExampleRouteHandler} />
      </Switch>
    </div>
  </div>
)
