import React from "react";
import Form from "./Form";
import FormAction from "./FormAction";

const getTodos = async () => {
    const res = await fetch("http://localhost:4000/todos", {
        // cache: "no-cache",
        next: {
            // revalidate: 10
            tags: ["todo-list"],
        },
    });
    const data = await res.json();
    return data;
};
const TodoList = async () => {
    const todos = await getTodos();
    return (
        <div>
            <h1>TodoList</h1>
            <div className="todo-list">{todos && todos.map((todo) => <div key={todo.id}>{todo.content}</div>)}</div>
            <FormAction />
            <Form />
        </div>
    );
};

export default TodoList;
