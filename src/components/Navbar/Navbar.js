import React from "react";
import "./Navbar.css";

const Navbar = props => (
	<nav class="navbar">
		<ul>
			<li class="brand"><a href="/">Clicky Color Dot</a></li>
			<li class="">You guessed incorrectly!</li>
			<li>Score: 0 | Top Score: 8</li>
		</ul>
	</nav>
	);

export default Navbar;