import React, { Component } from "react";

require('./card.styl');

export default class Card extends Component {
	render(){
		let folded, expanded;
		console.log(this.props.preview)
		folded =
			<div className="card folded">
				<div className="preview-section">
					{this.props.preview}
				</div>
				<div className="title-section">
					<img className="icon" src={this.props.icon}/>
					<p className="folded-title">{this.props.title}</p>
				</div>
			</div>
		expanded =
			<div className="card expanded">
				{this.props.children}
			</div>
		return(
			this.props.expanded === this.props.title ? expanded : folded
		)
	}
}
