import React from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Students from "./components/Students";

const App = () => {
	return (
		<>
			{/* <Counter  /> */}
			{/* <form action=''>
                <Input name="Tên" />
                <Input name="Email" type='email' />
                <Input name="Tuổi"  type='number' />
            </form> */}
			<Students />
		</>
	);
};

export default App;
