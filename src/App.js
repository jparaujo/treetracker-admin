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

  //better not to use componentWillMount in general, including for fetching data
  //instead prefer to use componentDidMount() 
  //1-27-2018 iremaka
  componentDidMount() {


        //created 1-27-2018 iremaka (begin)
        const script1 = document.createElement("script");

        script1.src = "/admin/datatables.min.js";
        script1.async = false;

        document.body.appendChild(script1);
        //created 1-27-2018 iremaka (end)


    fetch('/api/trees', { method: 'GET'})
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

  //1-27-2018 iremaka (begin)
  componentDidUpdate(prevProps, prevState)
  { 
    /*console.log("prevProps"); 
    console.log(prevProps); 
    console.log("prevState"); 
    console.log(prevState);
    console.log(typeof(prevState.records) === "object");*/

    if (typeof(prevState.records) === "object" && !prevState.records.length)
    {
        const script2 = document.createElement("script");

        script2.src = "/admin/c1.js";
        script2.async = false;

        document.body.appendChild(script2);
    }
  }


  componentWillUpdate(nextProps, nextState)
  {
    /*console.log("nextProps"); 
    console.log(nextProps); 
    console.log("nextState"); 
    console.log(nextState);
    console.log("nextState2");
    console.log(nextState.records.length);*/

 
  }
  //1-27-2018 iremaka (end)


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
