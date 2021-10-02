import carService from "../../services/carService";
import React, { Component } from "react";
import { connect } from "react-redux"
import { tokenSelector } from "../../redux/selectors/tokenSelector"
import { history } from "../../app-history"

class ListCars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // cars: [{model: "vectra", year: 2002}, {model: "Audi A4", year: 2008}]
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
            <div>
                <h1>List of cars</h1>
                <ul>
                    {this.state.cars.map((car) => {
                        return <li><div onClick={() => history.push("detail/" + car.id)}>{car.model}</div></li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: tokenSelector(state)
})

export default connect(mapStateToProps)(ListCars);