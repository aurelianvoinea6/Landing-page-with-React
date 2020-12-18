import React from "react";
import { MycardsSection } from "../component/cards.jsx";
import { Navbar } from "../component/navbar.jsx";
import { Jumbotron } from "../component/jumbotron.jsx";
import { Footer } from "../component/footer.jsx";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<MycardsSection />
			<Footer />
		</div>
	);
}
