import React from "react";
import "./assets/css/style.css";
import "./assets/scss/style.scss";
import User from "./components/User";
// import Card from "./components/Card/Card";
// import Product from "./components/Products/Product";
const App = () => {
	return (
		<div className="container">
            <User name={"Hiếu"} onGetData={() => {
                console.log("Hello");
            }}>
                <h1>Test</h1>
            </User>
			{/* <h1>Kiểm tra header</h1>
			<div className="test">
				<button>Click vào đây</button>
			</div> */}
            {/* <Card  /> */}
            {/* <Product /> */}
		</div>
	);
};

export default App;
