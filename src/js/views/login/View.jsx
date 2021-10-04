import React, { Component, Fragment, Link } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"


import { actions as authActions } from "../../redux/modules/auth"

import authService from "../../services/authService"
import { history } from "../../app-history"
import { Header } from "../../common/components/Header"
import globalStyles from "../../../style/index.css"
import styles from "./styles.css"

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

  componentDidUpdate(){
    if (this.props.token.token){
      history.push('/');
    }
  }

  handleSignUpClick = async (event) => {
    event.preventDefault();
    history.push('/signUp');
  }

  render() {
    return (
      <Fragment>
      <Header />
        <div className={styles.centered}>
          <div className={styles.form}>
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <input type="text" name="username" value={this.state.username} onChange={this.handleFormChange} className={styles.formInput} placeholder={"username"}/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleFormChange} className={styles.formInput} placeholder={"password"}/>
              <button action="submit" className={globalStyles.button}>Entrar</button>
            </form>
              <a href={"signUp"} onClick={this.handleSignUpClick} style={{color: 'black', margin: "15px"}}>Signup</a>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  
  token: {token: state.auth.token}
})

const mapDispatchToProps = {
  ...authActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
