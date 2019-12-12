import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import Login from "./components/LoginRegister";
import fire from './config/Fire';

import { Provider } from "./context";

import "./App.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />        
            <div className="container">
              <Switch>
                <Route exact path="/index" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
                <Route exact path="/" component={Login}/>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
