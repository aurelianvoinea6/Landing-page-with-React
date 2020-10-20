import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { MycardsSection } from "../component/cards.jsx";

//create your first component
export function Home() {
	return (
		<div>
			<MycardsSection />
		</div>
	);
}
