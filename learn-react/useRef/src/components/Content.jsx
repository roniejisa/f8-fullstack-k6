import React from "react";

// const color = (ParentComponent) =>{
//     console.log("color");
//     const myComponent = (props) => {
//         return <ParentComponent {...props} />;
//     }
//     return myComponent;
// }
const Content = React.memo(function Content(){
	return (
		<>
			{console.log("Render Content")}
			<div>Content</div>
		</>
	);
})

export default Content;
// Use memo sẽ thay đổi khi thay đổi props
