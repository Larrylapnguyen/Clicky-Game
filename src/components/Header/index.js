import React from "react";
import "./style.css";

export default function Header(props) {
	return (
		<header>
			<nav>
				<div>
					<h1>Memory Game</h1>
				</div>
				<div>
					<h2>{props.header}</h2>
				</div>
				<div className="score">
					<div>Score: {props.score}</div>
					<div>Highscore: {props.highscore}</div>
				</div>
			</nav>
		</header>
	);
}
