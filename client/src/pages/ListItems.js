import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Item = props => (
    <tr>
        <td>{props.item.name}</td>
    </tr>
)

class ListItems extends Component{
    constructor(props){
        super(props)

        // this.deleteItem = this.deleteItem.bind(this)

        this.state = {
            items:[]
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/items')
            .then(res => {
                this.setState({
                    items:res.data
                })
            })
    }

    // deleteItem(id){
    //     axios.delete(`http://localhost:5000/items/${id}`)
    //         .then(res => {
    //             this.setState({
    //                 items: this.state.items.filter(item => item.id !== id)
    //             })
    //         })
    //     window.location ='/';
    // }

    ItemList() {
        return this.state.items.map(currentItem => {
          return <Item item={currentItem} key={currentItem.id}/>;
        })
      }

    render(){
        return(
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>id</th>         
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* { this.ItemList() } */}
                        {this.state.items.map(item => ( 
                        <tr key={item.id}>
                        <td>
                            <Link to={"/items/"+item.id} className="nav-link">{item.code}</Link>
                        </td>
                        <td>{item.name}</td>
                        {/* <td>
                            <button
                                className="btn btn-danger"
                                onClick = {() => {deleteItem(item.id)}}
                                >
                                    Delete
                            </button>
                        </td> */}
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ListItems;