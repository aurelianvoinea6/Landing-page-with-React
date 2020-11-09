import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-warning mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Halloween 2020</span>
			</Link>
		</nav>
	);
};
