import { useDispatch, useSelector } from "react-redux";

const App = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({ type: "counter/decrement", payload: 10 })}>-</button>
            <button onClick={() => dispatch({ type: "counter/increment", payload: 10 })}>+</button>
        </div>
    );
};

export default App;
