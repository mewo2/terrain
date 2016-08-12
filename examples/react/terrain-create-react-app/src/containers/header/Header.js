import React, { Component } from 'react';

export default class Header extends Component {

	constructor(){
		super();
	}

	render() {
		let styles = {
	      header: {
	        height: "60px",
	      }     
	    }
		return(
			 <div style={styles.header} className="App-header">
          		<h2>Generate Fantasy Maps with React and D3</h2>
				<p>Learn more about contributing to this <a href="https://github.com/mewo2/terrain" target="_blank">fantasy terrain project on github</a></p>
        	</div>
		);
	}

}