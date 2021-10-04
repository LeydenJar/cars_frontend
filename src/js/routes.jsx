import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"

import styles from "../style/index.css"
import LoginView from "views/login/View"
import ListCars from "./views/list/View"
import CarDetail from "./views/detail/View"
import SignUpView from "./views/register/View"

module.exports = (
  <div className={styles.container}>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={ListCars} />
        <Route
          path="/login"
          component={LoginView}
        />
        <Route
          path="/signUp"
          component={SignUpView}
        />
        <Route
          path="/detail/:id"
          component={CarDetail}
        />
        <Route
          path="*"
          component={ListCars}
        />
      </Switch>
    </div>
  </div>
)
