import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			initialage: props.age,
			status: 0
		};
		setTimeout(() => {
			this.setState({
				status: this.state.status + 1
			});
		},1000);
	}

	onMakeOlder() {
		this.setState({
			initialage: this.state.initialage + 3
		});
	}
	render(){
		var text = "Something!";
		return(
			<div>
			<p>{text}</p>
			<p>Your name is {this.props.name}, your age is {this.state.initialage} </p>
			<p>Status {this.state.status}</p>
			<p>User object => name: {this.props.user.name}</p>
			<div>
			<h4>Hobbies</h4>
			<ul>
			{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
			</ul>
			<hr/>
			<p>your age is {this.state.initialage}</p>
			<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
			<hr/>
			<button className="btn btn-primary" onClick={this.props.greet} >Alert</button>
			</div>
			<h2>This is home</h2>
			</div>
			);
	}
}

Home.propTypes= {
	name: PropTypes.string,
	age: PropTypes.number,
	user: PropTypes.object,
	greet: PropTypes.func
};