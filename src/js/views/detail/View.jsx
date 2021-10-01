import React, { Component } from "react";


//This view shows details of a car
class CarDetail extends Component {

    constructor(props){
        super(props)
        this.carId = props.carId;
    }
    

    componentDidMount() {
        const { getAwesomeCode } = this.props
    
        getAwesomeCode()
      }

    render() {
        return (
            <div>
                <h1>Car Detail</h1>
                <p>This is the car detail for car with id {this.carId}</p>
            </div>
        );
    }
}

export default CarDetail;