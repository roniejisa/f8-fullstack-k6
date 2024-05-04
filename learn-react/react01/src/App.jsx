import React, { Component } from "react";
import Counter from "./components/Counter";

export class App extends Component {
	constructor() {
		super();
		this.state = { show: true };
	}
	handleChangeShow = () => {
		this.setState({
			show: !this.state.show,
		});
	};
	render() {
		return (
			<>
				<button onClick={this.handleChangeShow}>Toggle</button>
				{this.state.show && <Counter initCount={0} />}
			</>
		);
	}
}

export default App;
