import React, { Component } from "react";
import Card from "./Card";
import items from "./items";
import Header from "./Header/";

class App extends Component {
	state = {
		items
	};

	picked = id => {
		console.log("picked", id);
	};

	render() {
		return (
			<>
				<Header />
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
