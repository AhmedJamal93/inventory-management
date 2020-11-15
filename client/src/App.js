import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
//React Router
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//Pages
import AddItem from './pages/AddItem';
import ListItems from './pages/ListItems';
import ItemDetails from './pages/ItemDetails';
import EditItem from './pages/EditItem';
import DeleteItem from './pages/DeleteItem';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
       <div>
        <Header />
        <Route path='/add' component={AddItem} />
        <Route path='/inventory' component={ListItems} />
        <Route path='/items/:id' component={ItemDetails} />
        <Route path='/edit/:id' component={EditItem} />
        <Route path='/delete/:id' component={DeleteItem} />
      </div>
      </Router>
    )
  }
}

export default App;
