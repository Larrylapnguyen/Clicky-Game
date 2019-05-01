import React from "react";
import "./style.css";

function Card(props) {
	return (
		<div>
			<span onClick={() => props.picked(props.id)} className="picked">
				<div className="img-container">
					<img alt={props.name} src={`${props.image}`} />
				</div>
			</span>
		</div>
	);
}

export default Card;
