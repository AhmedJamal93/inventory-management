import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'



class ItemDetails extends Component{
    constructor(props){
        super(props)

        this.state = {
            code:'',
            name:'',
            cost:0,
            price:0
        }
    }

    componentDidMount(){
        
        axios.get('http://localhost:5000/items/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    code:res.data.code,
                    name:res.data.name,
                    cost:res.data.cost,
                    price:res.data.price
                })
                
                console.log(res.data)
            })
        
    }

    render(){
        return(
            <div>
                <h4>Item Details</h4>
                <ul>
                    <li><label>Code: </label></li>
                    <ul>
                        <li><p>{this.state.code}</p></li>
                    </ul>
                    <li><label>Name: </label></li>
                    <ul>
                        <li><p>{this.state.name}</p></li>
                    </ul>
                    <li><label>Cost: </label></li>
                    <ul>
                        <li><p>{this.state.cost}</p></li>
                    </ul>
                    <li><label>Price: </label></li>
                    <ul>
                        <li><p>{this.state.price}</p></li>
                    </ul>
                </ul>
                <button className="btn btn-warning">
                <Link to={"/edit/"+this.props.match.params.id}>Edit</Link>
                </button>
                <br />
                <br />
                <button className="btn btn-danger">
                <Link to={"/delete/"+this.props.match.params.id}>Delete</Link>
                </button>
            </div>
        )
    }
}

export default ItemDetails;