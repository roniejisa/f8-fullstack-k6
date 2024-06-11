import { useLayoutEffect, useState } from "react";
import Content from "./components/Content";

const App = () => {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        if (count === 5) {
            setCount(0);
          console.log(count);  
        } 
    }, [count]);

    return (
      

        <div>
          {console.log("App render")}
            <div onClick={() => setCount(count + 1)}>Hello anh em: {count}</div>
            <Content />
        </div>
    );
};

export default App;
