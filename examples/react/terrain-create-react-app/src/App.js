import React, { Component } from 'react';
import * as d3 from "d3";

import Header from './containers/header/Header';
import Tools from './containers/tools/Tools';
import Terrain from './components/terrain/Terrain';

import logo from './logo.svg';
import './App.css';


class App extends Component {


  constructor(){
    super();

    this.state = {
      hello: "world"
    }
  }

  componentDidMount(){
     
  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Tools/>
        <Terrain/>
      </div>
    );
  }


}

export default App;
