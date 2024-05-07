import React from "react";
import ReactDOM from "react-dom/client";

const root = document.querySelector("#root");
// DOM ảo ==> ReactDOM ==> DOM Thật

const reactRoot = ReactDOM.createRoot(root);

// Tạo React Element
// const h1 = React.createElement(
// 	"h1",
// 	{
// 		className: "title",
// 		id: "title",
// 	},
// 	React.createElement(
// 		"a",
// 		{
// 			href: "https://fullstack.edu.vn",
// 			target: "_blank",
// 		},
// 		"Fullstack F8"
// 	)
// );
// const h1 = React.createElement(
// 	"h1",
// 	{
// 		className: "title",
// 	},
// 	"Học lập trình không khó"
// );
// const h2 = React.createElement(
// 	"h2",
// 	{
// 		className: "sub-title",
// 	},
// 	"Học React không khó"
// );

// const ul = React.createElement(
// 	"ul",
// 	{
// 		id: "menu",
// 	},
// 	[...Array(100).keys()].map((index) =>
// 		React.createElement(
// 			"li",
// 			{
// 				key: index,
// 			},
// 			`Item ${index + 1}`
// 		)
// 	)
// );

// const container = React.createElement(
// 	"div",
// 	{
// 		className: "container",
// 	},
// 	h1,
// 	h2,
// 	ul
// );

// JSX (Javascript XML)

//Flow: JSX ==> Javascript Complier ==> React Element ==> React Dom ==> HTML
const title = (
	<>
		Học <i>React</i> không khó
	</>
);
const lists = [
	<li key={1}>Item 1</li>,
	<li key={2}>Item 2</li>,
	<li key={3}>Item 3</li>,
	<li key={4}>Item 4</li>,
	<li key={5}>Item 5</li>,
];
const users = ["User 1", "User 2", "User 3"];
const userJsx = users.map((user, index) => <li key={index}>{user}</li>);
const check = true;
const getName = () => {
	return <h3>Roniejisa</h3>;
};
// Component
const GetName = () => {
	return <h2>RONIEJISA</h2>;
};
const elements = (
	<>
		<div className="container">
			<h1 id="title">{title}</h1>
			<h2>Học lập trình để đi làm</h2>
			{/* {getName()} */}
			<GetName />
			{check ? (
				<ul>{userJsx}</ul>
			) : (
				<>
					<p>Không có gì</p>
					<p>Không có gì</p>
				</>
			)}
		</div>
		<p className="sub-container">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
			labore aperiam, explicabo dignissimos veniam debitis atque? Sit hic
			minus quidem libero ducimus. Itaque minus ducimus ipsa est facilis
			maiores doloremque.
		</p>
	</>
);

reactRoot.render(elements);
