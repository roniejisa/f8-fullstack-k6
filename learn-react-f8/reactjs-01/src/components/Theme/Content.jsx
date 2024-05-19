import React, { useContext } from "react";
import { AppContext } from "../../App";

const Content = () => {
    const {changeMessage} = useContext(AppContext);
	return <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error, iste nesciunt, veniam nisi inventore in expedita magnam perspiciatis veritatis doloribus reprehenderit accusantium explicabo incidunt dolorem eligendi dolorum! Eum, perspiciatis.</p>
        <button onClick={changeMessage}>Click me</button>
    </div>;
};

export default Content;
