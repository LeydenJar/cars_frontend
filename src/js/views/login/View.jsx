import React, { Component, Fragment, Link } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import LazyLoading from "../../common/components/LazyLoading"
import { actions as authActions } from "../../redux/modules/auth"
import { tokenSelector } from "../../redux/selectors/tokenSelector"
import authService, { login } from "../../services/authService"
import { history } from "../../app-history"



class LoginView extends Component {

  static propTypes = {
    token: PropTypes.object.isRequired,
  }

  constructor(props){
    super(props);
    this.state = {
        username: "",
        password: ""
    }
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleFormChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    //call api
    var loginResult = await authService.login(this.state.username, this.state.password);
    //get token from response
    const token = loginResult.token;

    //Send setToken action to redux
    const {setToken} = this.props;
    setToken(token);
  }

  render() {
    if (this.props.token.token){
      history.push('/list');
    }
    return (
      <Fragment>
        <div style={{ left: "50%" }}>
          <h2>Login Screen</h2>
          <form onSubmit={this.handleSubmit}>
          <label>
                        Username:
                        <input type="text" name="username" value={this.state.username} onChange={this.handleFormChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleFormChange}/>
                    </label>
            <button action="submit">Entrar</button>
          </form>

          {/* <Link to="/signup">Signup</Link> */}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
   token: tokenSelector(state)
})

const mapDispatchToProps = {
  ...authActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
