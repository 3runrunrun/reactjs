import React from "react";

export const Header = (props) => {
		return(
			<nav className="navbar navbar-default">
				<div className="container">
					<p>Header</p>
					<hr/>
					<a href="#">{props.homelink}</a>
				</div>
			</nav>
			);
};