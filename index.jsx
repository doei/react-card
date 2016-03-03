import ReactDOM from 'react-dom';
import React, { Component } from "react";
import Card from './Card';

let icon = require('./PICTO29.png');


class Preview extends Component{
	render(){
		return(
			<p>IM SELECTED !!!</p>
		)
	}
}


ReactDOM.render(
	<Card
		title="test"
		icon={icon}
		preview={<Preview/>}
	>
		<p>Child ?</p>
	</Card>,
	document.getElementById('card-root')
)