import React, { Component } from 'react';
import * as d3 from "d3";

import { TerrainViewController } from './TerrainViewController.js';

export default class Terrain extends Component {

    constructor(){
        super();
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

    render(){

        let styles = {
          terrain: {
            width: "800px",
            height: "800px",
            margin: "0 auto"
          } 
        }

        return (
                    <div style={styles.terrain} ref="terrain" id="terrainContainer"></div>
               )
    }
}

