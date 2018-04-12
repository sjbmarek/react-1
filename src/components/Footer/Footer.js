import React from "react";
import "./Footer.css";

const Footer = props => (
	<footer className="footer border-top border-light">
	<div className="bottom">{props.children}</div>
	</footer>
);

export default Footer;