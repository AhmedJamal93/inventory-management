import React, {Component} from 'react';
import axios from 'axios';

class AddItem extends Component{
    constructor(props){
        super(props);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCost = this.onChangeCost.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            code:'',
            name:'',
            cost:0.00,
            price:0.00
        }
    }

    onChangeCode(e){
        this.setState({
            code: e.target.value
        })
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onChangeCost(e){
        this.setState({
            cost: e.target.value
        })
    }

    onChangePrice(e){
        this.setState({
            price: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const newItem = {
            code: this.state.code,
            name: this.state.name,
            cost: this.state.cost,
            price: this.state.price,
        }

        // axios.post('http://localhost:5000/add', newItem)

        fetch('http://localhost:5000/add',{
                method:"POST",
                headers:{"content-Type": "application/json"},
                body: JSON.stringify(newItem)
            })

        window.location = '/';
    }

    render(){
        return(
            <div>
                <h1>Add New Item To Inventory</h1>
                <form onSubmit={this.onSubmit}>
                <div className = 'form-group'>
                        <label>Code:</label>
                        <input
                            type='text'
                            required
                            className='form-control'
                            value={this.state.code}
                            onChange={this.onChangeCode} />
                    </div>
                    <div className = 'form-group'>
                        <label>Name:</label>
                        <input
                            type='text'
                            required
                            className='form-control'
                            value={this.state.name}
                            onChange={this.onChangeName} />
                    </div>
                    <div className = 'form-group'>
                        <label>Cost:</label>
                        <input
                            type='number'
                            required
                            className='form-control'
                            value={this.state.cost}
                            onChange={this.onChangeCost} />
                    </div>
                    <div className = 'form-group'>
                        <label>Price:</label>
                        <input
                            type='number'
                            required
                            className='form-control'
                            value={this.state.price}
                            onChange={this.onChangePrice} />
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit" 
                            value="Create Event" 
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}

export default AddItem;