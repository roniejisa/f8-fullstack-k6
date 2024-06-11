import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchTodo } from "./redux01/middlewares/fetchTodo";

const App = () => {
  const todoList = useSelector((state) => state.todo.todoList)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo()) //dispatch lên middleware
  }, [])
  return (
    <div>{todoList && todoList.map((todo) => <p key={todo.id}>{todo.title}</p>)}</div>
  )
}

export default App