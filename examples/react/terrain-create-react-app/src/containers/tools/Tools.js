import React, { Component } from 'react';

export default class Tools extends Component {

	constructor(){
		super();
	}

	onGenerateClick(){

	}

	onSaveClick(){

	}

	onExportClick(){

	}

	render() {
		return(
			<div className="toolsContainer">
				<p className="cominsoon">Tools - coming soons - would include:</p>
				<button className="disabled" onClick={ this.onGenerateClick }>Generate</button>
				<button className="disabled" onClick={ this.onSaveClick }>Save</button>
				<button className="disabled" onClick={ this.onExportClick }>Export</button>
			</div>
		);
	}

}