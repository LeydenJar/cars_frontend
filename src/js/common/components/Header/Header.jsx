import React, { PureComponent } from 'react';

import styles from './Header.css';
import { connect } from "react-redux"
import { actions as authActions} from '../../../redux/modules/auth';
import { history } from '../../../app-history';

import { tokenSelector } from "../../../redux/selectors/tokenSelector";
import {FaChevronLeft} from "react-icons/fa";

class Header extends PureComponent {
  handleLogout = async (event) => {
    event.preventDefault()
    this.props.logout();
    history.push("/login");
  }

  goBack = async (event) => {
    history.goBack()
  }

  render() {
    return (
      <header className={styles.globalHeader}>
        <h2 className={styles.centerHeaderText}>Cars App</h2>
        {
          this.props.backButton && (
            <FaChevronLeft size={"1.5em"} className={styles.chevron} onClick={this.goBack}/>
          )
        }

        {this.props.token.token && (
          <button className={styles.logout} onClick={this.handleLogout}>Logout</button>
        )
        }
      </header>
    );
  }
}

const mapStateToProps = state => ({
  token: tokenSelector(state)
})

const mapDispatchToProps = {
  ...authActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
