import React, { Component } from "react";
import Card from "./Card";
import items from "./items";
import Header from "./Header/";

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

class App extends Component {
	state = {
		items,
		header: `Click on an image you haven't clicked yet`,
		clicked: items,
		currentScore: 0,
		highScore: 0
	};

	picked = id => {
		console.log("picked", id);

		const findId = this.state.clicked.find(item => item.id === id);
		if (findId === undefined) {
			console.log("Wrong");
			this.setState({
				highScore:
					this.state.currentScore > this.state.highScore
						? this.state.currentScore
						: this.state.highScore,
				currentScore: 0,
				items: items,
				clicked: items,
				header: `You lost! Click an image to start again!`
			});
		} else {
			const newItems = this.state.clicked.filter(item => item.id !== id);
			this.setState({
				currentScore: this.state.currentScore + 1,
				clicked: newItems,
				items: shuffle(items),
				header: `Click on an image you haven't clicked yet`
			});
			console.log(this.state.clicked);
		}
	};

	render() {
		return (
			<>
				<Header
					score={this.state.currentScore}
					header={this.state.header}
					highscore={this.state.highScore}
				/>
				<div className="container">
					<div className="card">
						{this.state.items.map(item => (
							<Card
								picked={this.picked}
								id={item.id}
								key={item.id}
								image={item.image}
								name={item.name}
							/>
						))}
					</div>
				</div>
			</>
		);
	}
}

export default App;
