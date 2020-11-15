import React, {Component} from 'react';
import axios from 'axios';

class EditItem extends Component{
    constructor(props){
        super(props)

        this.state = {
            code:'',
            name:'',
            cost:0,
            price:0
        }

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeCost = this.onChangeCost.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

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
            })
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        })
    }

    onChangeCost(e){
        this.setState({
            cost:e.target.value
        })
    }

    onChangePrice(e){
        this.setState({
            price:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const itemEdit = {
            name:this.state.name,
            cost:this.state.cost,
            price:this.state.price
        }

        axios.put('http://localhost:5000/items/'+this.props.match.params.id, itemEdit)

        window.location = '/inventory'
    }


    render(){
        return(
            <div>
                <h1>Edit Item</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Code (CANNOT CHANGE): </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.code}
                            />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Cost: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.cost}
                            onChange={this.onChangeCost}
                            />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditItem;