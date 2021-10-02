import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"

import LazyLoading from "common/components/LazyLoading"

import styles from "../style/index.css"
import LoginView from "views/login/View"
import ListCars from "./views/list/View"
import CarDetail from "./views/detail/View"

const ExampleRouteHandler = LazyLoading(() => import("views/example"))

module.exports = (
  <div className={styles.container}>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={ExampleRouteHandler} />
        <Route
          path="/login"
          component={LoginView}
        />
        <Route
          path="/signUp"
          component={LazyLoading(() => import("views/register"))}
        />
        <Route
          path="/list"
          component={ListCars}
        />
        <Route
          path="/detail/:id"
          component={CarDetail}
        />
        <Route path="*" component={ExampleRouteHandler} />
      </Switch>
    </div>
  </div>
)
