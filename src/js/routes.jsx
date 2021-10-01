import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"

import LazyLoading from "common/components/LazyLoading"

import styles from "../style/index.css"
// import LoginView from "views/login/View"

const ExampleRouteHandler = LazyLoading(() => import("views/example"))

module.exports = (
  <div className={styles.container}>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={ExampleRouteHandler} />
        <Route
          path="/login"
          component={LazyLoading(() => import("views/login"))}
        />
        {/* <Route
          path="/login"
          component={LoginView}
        /> */}
        <Route
          path="/signUp"
          component={LazyLoading(() => import("views/register"))}
        />
        <Route
          path="/list"
          component={LazyLoading(() => import("views/list"))}
        />
        <Route
          path="/detail"
          component={LazyLoading(() => import("views/detail"))}
        />
        <Route path="*" component={ExampleRouteHandler} />
      </Switch>
    </div>
  </div>
)
