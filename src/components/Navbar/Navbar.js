import React from "react";
import "./Navbar.css";

const Navbar = props => (
	<nav className="navbar p-0">
		<ul className ="m-0 p-2">
			<li className="brand"><a href="/">Korean Alphabet Click</a></li>
			<li className="">You guessed incorrectly!</li>
			<li>Score: 0 | Top Score: 8</li>
		</ul>
	</nav>
	);

export default Navbar;