import Header from "./components/Header";
import { Fragment } from "react";
import HeaderInner from "./components/HeaderInner";
const App = () => {
	const handleClick = (e) => {
		console.log("Click me");
		console.log(e);
	};

	const handleClick2 = (text) => {
		console.log(text);
	};

    const title = "F8 - Fullstack";
    const data = {
        name:"Hiếu",
        email:"roniejisa@gmail.com"
    };
    const handleClick3 = (text) => {
        console.log(text);
    }
	return (
		<Fragment>
			<Header title={title} content="Hello anh em F8" {...data} onGetData={handleClick3}>
                <HeaderInner title="Test" onGetData={handleClick}/>
            </Header>
			<h1
				style={{
					color: "red",
					fontStyle: "italic",
				}}>
				Học React không khó
			</h1>
			<button onClick={handleClick}>Click me</button>
			<button onClick={(e) => handleClick2(e.target.innerText)}>
				Click me 2
			</button>
		</Fragment>
	);
};

export default App;
