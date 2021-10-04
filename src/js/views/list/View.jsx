import carService from "../../services/carService";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux"
import { tokenSelector } from "../../redux/selectors/tokenSelector"
import { history } from "../../app-history"
import { Header } from "../../common/components/Header";
import styles from "./list.css";


class ListCars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    async componentDidMount() {
        if(!this.props.token.token){
            history.push("login");
        }

        const cars = await carService.getCars(this.props.token.token);

        this.setState({
            ...this.state,
            cars: cars
        })
    }

    render() {
        return (
            <Fragment>
                <Header />
            <div>
                <h1 style={{marginLeft: "15px"}}>List of cars</h1>
                <div className= {styles.list}>
                    {this.state.cars.map((car) => {
                        return <div key={car.id} className={styles.listItem} onClick={() => history.push("detail/" + car.id)}><p className={styles.listItemTitle}>{car.model}</p></div>
                    })}
                </div>
            </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    token: tokenSelector(state)
})

export default connect(mapStateToProps)(ListCars);