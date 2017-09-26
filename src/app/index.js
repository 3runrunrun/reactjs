import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	onGreet(){
		alert("hello");
	};
	render() {
		var user={
			name:"Anna",
			age:"21",
			hobbies:["Sports","Reading"]
		};
		return (
			<div className="container">
			<Header homelink="Home" />
			<h1>Hello Nigga {5==2 ? "Yes":"No"}</h1>
			<div className="row">
			<Home name={"Max"} age={29} user={user} greet={this.onGreet}/>
			</div>
			</div>
			);
	}
}

render(<App/>, window.document.getElementById("app"));