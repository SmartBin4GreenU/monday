import React, {Component} from 'react'
import axios from 'axios'

//https://gist.github.com/wwarodom/f27e0903ed3a12cd2360dea88d53c295

class Bear extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bears:[]
        }
    }
    componentDidMount(){
        this.getAllBears()
    }

    getAllBears() {
        axios.get('http://localhost:8888/api/bears')
            .then( (response) => this.setState({bears: response.data}))
    }

    renderBears() {
        return (
            this.state.bears.map((bear,index) =>
                (<li key={index}>{bear.id} {bear.name} {bear.weight}</li>) )
        )
    }

    render() {
        return (<div>
                    <h1>Bear</h1>
                    <ul> {this.renderBears()}</ul>
               </div>)
    }
}

export default Bear