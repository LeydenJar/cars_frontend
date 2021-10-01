class ListCars extends Component{

    constructor(props){
        super(props);
        this.state = {
            cars: [{model: "vectra", year: 2002}, {model: "Audi A4", year: 2008}]
        }
    }


    componentDidMount() {
        const { getAwesomeCode } = this.props
    
        getAwesomeCode()
      }

    render(){
        return(
            <div>
                <h1>List of cars</h1>
                <ul>
                    {this.state.cars.map((car) => {
                        return <li><div onClick={() => this.props.onClick(car)}>{car.model}</div></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ListCars;