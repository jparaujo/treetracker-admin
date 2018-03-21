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
	var head = document.getElementsByTagName('head')[0];
	(function() {
		var css = [
			'/admin/css/font-awesome.min.css',
                        '/admin/css/jquery.contextMenu.min.css'
		],
		i = 0,
		link = document.createElement('link'),
		head = document.getElementsByTagName('head')[0],
		tmp;
		link.rel = 'stylesheet';

		for(; i < css.length; i++){
			tmp = link.cloneNode(true);
			tmp.href = css[i];
			head.appendChild(tmp);
		}
	})();

        const script1 = document.createElement("script");

        script1.src = "/admin/datatables.min.js";
        script1.async = false;

        document.body.appendChild(script1);

        const script1b = document.createElement("script");

        script1b.src = "/admin/jQuery.contextmenu.js";
        script1b.async = false;

        document.body.appendChild(script1b);

        const script1c = document.createElement("script");

        script1c.src = "/admin/jquery.ui.position.js";
        script1c.async = false;

        document.body.appendChild(script1c);
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
