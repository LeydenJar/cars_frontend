
import React, { Component, Fragment } from "react";
import { history } from "../../app-history";
import authService from "../../services/authService";
import styles from "./styles.css";
import globalStyles from "../../../style/index.css"
import { Header } from "../../common/components/Header";

class SignUpView extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const registerResult = await authService.register(this.state.username, this.state.password);
        history.push("/login");
    }


    handleLoginClick = async (event) => {
        event.preventDefault();
        history.push('/login');
      }

    render(){
        return(
            <Fragment>
            <Header />
                    <div className={styles.centered}>
                        <div className={styles.form}>
                            <h2>SignUp</h2>
                            <form onSubmit={this.handleSubmit} className={styles.form}>
                                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className={styles.formInput}/>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className={styles.formInput}/>
                                <button action="submit" className={globalStyles.button}>Sign Up</button>
                            </form>
                            <a href={"login"} onClick={this.handleLoginClick} style={{color: 'black', margin: "15px"}}>Login</a>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default SignUpView;