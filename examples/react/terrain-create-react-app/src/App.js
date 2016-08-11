import React, { Component } from 'react';
import * as d3 from "d3";

import { TerrainViewController } from './TerrainViewController.js';

import logo from './logo.svg';
import './App.css';


class App extends Component {


  constructor(){
    super();

    this.state = {
      hello: "world"
    }
  }

  drawTerrain( id ){

    let svg = d3.select("#terrainContainer").append("svg")
                                                .attr("width", "100%")
                                                .attr("height", "100%");


    let terrain = new TerrainViewController();        
    let defaultParams = terrain.getDefaultParams(); 
    terrain.doMap( svg, defaultParams)
    

  }

  componentDidMount(){
     this.drawTerrain(); 
  }
  
  render() {

    let styles = {
      terrain: {
        width: "800px",
        height: "800px",
        margin: "0 auto"
      },
      header: {
        height: "60px",
      }     
    }

    return (
      <div className="App">
        <div style={styles.header} className="App-header">
          <h2>Generate Fantasy Maps with React & D3</h2>
        </div>
        <div style={styles.terrain} ref="terrain" id="terrainContainer"></div>
      </div>
    );
  }


}

export default App;
