import React from "react";
import "./Navbar.css";

const Navbar = props => (
	<nav className="navbar p-0">
		<ul className ="m-0 p-2">
			<li className="brand"><a href="/">Korean Alphabet Click</a></li>
			<li className="">Guess Feedback Here!</li>
			<li>Score: ?? | Top Score: ??</li>
		</ul>
	</nav>
	);

export default Navbar;