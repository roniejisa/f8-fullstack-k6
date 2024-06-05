import { useEffect } from "react";
import TaskList from "../components/Task/TaskList";
import { useDispatch } from "react-redux";
import { getTasks } from "../store/middlewares/taskMiddleware";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTasks());
    }, []);
    return <TaskList />;
};

export default Home;
