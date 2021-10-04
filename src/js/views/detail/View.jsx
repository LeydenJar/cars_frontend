import React, { Component, Fragment } from "react";
import carService from "../../services/carService";
import { connect } from "react-redux"
import { tokenSelector } from "../../redux/selectors/tokenSelector"
import { history } from "../../app-history"
import { Header } from "../../common/components/Header";

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

        return (
            <Fragment>
                <Header backButton={true}/>
                <div>
                    <h1>Car Detail</h1>
                    <p>This is the car detail for car with id {this.state.car.id}</p>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    token: tokenSelector(state)
})

export default connect(mapStateToProps, null)(CarDetail);