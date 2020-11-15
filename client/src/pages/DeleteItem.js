import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class DeleteItem extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:''
        }


    }

    deleteItem(){
        axios.delete('http://localhost:5000/items/'+this.props.match.params.id)

        window.location = '/inventory'
    }

    componentDidMount(){
        axios.get('http://localhost:5000/items/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name:res.data.name
                })
            })
    }

    render(){
        return(
            <div>
                <h3>Are you sure you want to Delete the following item from your inventory?</h3>
                <p>{this.state.name}</p>
                <button className="btn btn-danger" onClick={() => this.deleteItem()}>
                    DELETE
                </button>
                <br />
                <br />
                <button className="btn btn-secondary">
                    <Link to="/" >Cancel</Link>
                </button>
            </div>
        )
    }
}

export default DeleteItem;