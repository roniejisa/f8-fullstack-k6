import { createRoot } from "react-dom/client";
import { Component, createElement } from "react";
import App from './App';
//Render UI
const root = document.querySelector("#root");

//React Element
// const h1 = createElement(
// 	"h1",
// 	{
// 		className: "title",
// 	},
// 	"Học React không khó!"
// );

// const h2 = createElement(
// 	"h2",
// 	{
// 		className: "title",
// 	},
// 	"Học React không khó!"
// );

// const button = createElement(
// 	"button",
// 	{
// 		id: "button",
// 		className: "btn",
// 	},
// 	"Click item"
// );

// const ul = createElement(
// 	"ul",
// 	{
// 		className: "lists",
// 	},
// 	...[...Array(100).keys()].map((index) => {
// 		return createElement("li", {}, `Item ${index + 1}`);
// 	})
// );
// // const div = createElement(
// // 	"div",
// // 	{
// // 		id: "main",
// // 		className: "main",
// // 		"data-name": "hello",
// // 		style: {
// // 			fontWeight: "bold",
// // 			textDecoration: "underline",
// // 		},
// // 	},
// // 	h1,
// // 	h2,
// // 	button,
// // 	ul,
// // 	"Học react"
// // );
// //JSX
// const title = "F8";
// const getName = () => {
//     return <h2>Hiếu</h2>
// }
// const Product = () => {
//     return <h2>Sản phẩm ABC</h2>
// } // => Component

// const Welcome = () => {
//     return <h2>Học React không khó</h2>
// }

// class Welcome2 extends Component{
//     render(){
//         return <h2>Học React dễ hơn JS thuần</h2>
//     }
// }
// const div = (
// 	<ul>
// 		<li>Item 1</li>
// 		<li>Item 2</li>
// 		<li>{title}</li>
//         {getName()}
//         <Product />
//         <Welcome></Welcome>
//         <Welcome2  />
//     </ul>
// );

const rootRender = createRoot(root)
rootRender.render(<App />);

{/* // JSX => React Element (Thông qua Babel) => HTML (Thông qua ReactDOM) */}
