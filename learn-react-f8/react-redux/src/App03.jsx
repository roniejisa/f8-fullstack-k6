import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux_toolkit/slice/counterSlice";
const App = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment(10));
    };
    const handleDecrement = () => {
        dispatch(decrement(10));
    };
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

export default App;
