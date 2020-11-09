import React from "react";
import rigoImage from "../../img/halloween.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Happy Halloween 2020</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			<p>
				<a href="https://www.youtube.com/watch?v=aUjmuVOYWZU&ab_channel=TrapCity">Enjoy Halloween</a>{" "}
			</p>
		</a>
	</div>
);
