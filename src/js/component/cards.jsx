import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Button } from "./button.jsx";

export const MycardsSection = () => {
	// crear array de objetos
	let CardsContent = [
		{
			title: "trick or treat",
			description:
				"Trick-or-treating is a traditional Halloween custom for children and adults in some countries. Children in costumes travel from house to house, asking for treats with the phrase 'Trick or treat'.",
			imgUrl:
				"https://images.pexels.com/photos/5420786/pexels-photo-5420786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
		},
		{
			title: "The reaper has come",
			description:
				"Am I in your way? Ayy, ayy, ah, ah, ah, ah, ah Am I in your way? Ayy, ayy,…",
			imgUrl:
				"https://images.pexels.com/photos/1447096/pexels-photo-1447096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
		},
		{
			title: "Ghost!!",
			description: "bhoo..!!! boooo.... woooo...! who ?",
			imgUrl:
				"https://images.pexels.com/photos/3993247/pexels-photo-3993247.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
		},
		{
			title: "Graveyard",
			description:
				"It's close to midnight And something evil's lurking in the dark Under the moonlight, You see a sight that almost stops your heart",
			imgUrl:
				"https://images.pexels.com/photos/3050275/pexels-photo-3050275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
		}
	];
	// crear map
	let myGenerator = CardsContent.map((card, i) => {
		return (
			<Card key={i} className="card">
				<Card.Img variant="top" src={card.imgUrl} />
				<Card.Body className="py-3">
					<Card.Title>{card.title}</Card.Title>
					<Card.Text>{card.description}</Card.Text>
				</Card.Body>
				<div className="d-flex justify-content-center mb-2">
					<Button />
				</div>
			</Card>
		);
	});
	return (
		<div className="d-flex justify-content-center mb-5">{myGenerator}</div>
	);
};
