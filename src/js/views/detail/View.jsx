import React, { Component, Fragment } from "react";
import carService from "../../services/carService";
import { connect } from "react-redux"
import { tokenSelector } from "../../redux/selectors/tokenSelector"
import { history } from "../../app-history"
import { Header } from "../../common/components/Header";
import styles from "./detail.css";

//This view shows details of a car
class CarDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            car: null
        }
    }
    

    async componentDidMount() {

        if(!this.props.token.token){
            history.push("/login");
        }

        const carResponse = await carService.getCar(this.props.match.params.id, this.props.token.token);

        this.setState({
            car: carResponse
        })
      }

    render() {

        if(!this.state.car){
            return <h1>Loading</h1>
        }

        const car = this.state.car;
        return (

            <Fragment>
                <Header backButton={true}/>
                <div className={styles.container}>
                    <h1 style={{width: "100%", textAlign: "center"}}>Car Details</h1>
                    <table className={styles.table}>
                        <tr>
                            <td>Model</td>
                            <td>{car.model}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>{car.year}</td>
                        </tr>
                        <tr>
                            <td>Mileage</td>
                            <td>{car.mileage}</td>
                        </tr>
                        <tr>
                            <td>Air Conditioner</td>
                            <td>{car.airConditioner.toString()}</td>
                        </tr>
                        <tr>
                            <td>Eletric Windows</td>
                            <td>{car.eletricWindows.toString()}</td>
                        </tr>
                        <tr>
                            <td>Hydraulic Steering</td>
                            <td>{car.hydraulicSteering.toString()}</td>
                        </tr>
                        <tr>
                            <td>Automatic Transmission</td>
                            <td>{car.automaticTransmission.toString()}</td>
                        </tr>
                    </table>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    token: tokenSelector(state)
})

export default connect(mapStateToProps, null)(CarDetail);