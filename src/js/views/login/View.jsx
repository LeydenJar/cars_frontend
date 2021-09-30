import React, { Component, Fragment, Link } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import LazyLoading from "../../common/components/LazyLoading"
import { actions as exampleActions } from "../../redux/modules/example"
import { exampleSelector } from "../../redux/selectors/exampleSelector"

class LoginView extends Component {
  state = {
    username: "",
    password: "",
  }

  _handleFormChange(event) {
    this.setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  _handleSubmit(event) {
    event.preventDefault()
    console.log("submiting form")
    //call api

    //get token from response

    //Send setToken action to redux
  }

  render() {
    return (
      <Fragment>
        <div style={{ left: "50%" }}>
          <h2>Login Screen</h2>
          <form onSubmit={this._handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              onChange={this._handleFormChange}
            />
            <input type="password" name="password" id="password" />
            <button action="submit">Entrar</button>
          </form>

          {/* <Link to="/signup">Signup</Link> */}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  example: exampleSelector(state),
})

const mapDispatchToProps = {
  ...exampleActions,
}

export default connect(null, null)(LoginView)
