import React from "react";

import ReactDOM from "react-dom";

import Card from "react-bootstrap/Card";

import PropTypes from "prop-types";

export const MycardsSection = () => {
	// crear array de objetos
	let CardsContent = [
		{
			title: "cardtitle",
			description: "description",
			imgUrl:
				"https://images.pexels.com/photos/5420786/pexels-photo-5420786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
		},
		{
			title: "cardtitle",
			description: "description",
			imgUrl:
				"https://images.pexels.com/photos/1447096/pexels-photo-1447096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
		},
		{
			title: "cardtitle",
			description: "description",
			imgUrl:
				"https://images.pexels.com/photos/3993247/pexels-photo-3993247.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
		},
		{
			title: "cardtitle",
			description: "description",
			imgUrl:
				"https://images.pexels.com/photos/3050275/pexels-photo-3050275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
		}
	];
	// crear map
	let myGenerator = CardsContent.map((card, i) => {
		return (
			<Card
				style={{
					width: "18rem",
					display: "inline-block"
				}}
				key={i}>
				<Card.Img variant="top" src={card.imgUrl} />
				<Card.Body>
					<Card.Title>{card.title}</Card.Title>
					<Card.Text>{card.description}</Card.Text>
				</Card.Body>
			</Card>
		);
	});
	return <div className="d-flex justify-content-center">{myGenerator}</div>;
};
