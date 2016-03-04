import ReactDOM from 'react-dom';
import React, { Component } from "react";
import Card from './Card';

let icon = require('./PICTO29.png');


class Preview extends Component{
	render(){
		return(
			<p>Dernier avis :</p>
		)
	}
}


ReactDOM.render(
	<Card
		title="Tous vos avis"
		icon={icon}
		preview={<Preview/>}
	>
		<p>Child ?</p>
	</Card>,
	document.getElementById('card-root')
)