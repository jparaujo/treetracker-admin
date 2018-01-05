import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      records: []
    }
  }

  componentWillMount() {
    fetch('http://dev.treetracker.org/api/trees', { method: 'GET'})
      .then(response => {
        console.log('Status ---', response.ok);
        console.log('response.json() ---', response);
        return response.json().then(data => {
          return (response.ok) ? data : Promise.reject({status: response.status, data});
        });
      })
      .then(data => this.setState({ records: data.data }))
      .catch(err => console.log('ERROR:: Failed to Fetch Tree Records', err))
  }

  render() {
    return (
      <div className="App">
        <div className="header">
             <Navbar color="faded" light expanded="md">
                 <NavbarBrand href="/">GreenStand</NavbarBrand>
            </Navbar>
        </div>
        <Dashboard records={this.state.records} />
      </div>
    );
  }
}

export default App;
