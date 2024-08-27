import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import Link from "next/link";
import MessageData from "./Message";

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
    const message = cookies().get("message");

    const handleDelete = async (id) => {
        "use server";
        const res = await fetch(`http://localhost:4000/todos/${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            revalidateTag("todo-list");
            cookies().set("message", "Xoa thanh cong");
            return true;
        }
    };
    return (
        <div>
            {message && <MessageData message={message} />}
            <h1>TodoList</h1>
            <Link href="/todo/create" className="bg-red-500 px-4 my-2 py-2 rounded-md inline-block">
                Thêm mới
            </Link>
            <div className="todo-list">
                {todos &&
                    todos.map((todo) => (
                        <div key={todo.id}>
                            {todo.content} <Link href={`/todo/edit/${todo.id}`}>Sửa</Link>
                            <form
                                action={async () => {
                                    "use server";

                                    await handleDelete(todo.id);
                                }}
                            >
                                <button>Xóa</button>
                            </form>
                        </div>
                    ))}
            </div>
            {/* <Form /> */}
        </div>
    );
};

export default TodoList;
