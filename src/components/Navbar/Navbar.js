import React from "react";
import "./Navbar.css";

const Navbar = props => (
	<nav className="navbar p-0">
		<ul className ="m-0 p-2">
			<li><a href="/">Korean Alphabet Click 한국어 알파벳</a></li>
			<li className="">{props.message}</li>
			<li>Score: <span> {props.currentScore} </span> | Top Score: {props.topScore}</li>
		</ul>
	</nav>
	);

export default Navbar;