const todoList = document.querySelector('.todo-list');
const todoListDone = document.querySelector('.todo-list-done');
const addModal = document.querySelector('.add-modal');
const formAdd = addModal.querySelector('form');
const count = document.querySelector('.done');
const inputSearch = document.querySelector(`[type="search"]`);

const todoApi = "https://json-server-fawn-nine.vercel.app/todo";
const query = {
};

const getTodo = async (isDone = false) => {
    query.is_done = isDone;
    const queryString = Object.keys(query) ? `?${new URLSearchParams(query).toString()}` : ``;
    const response = await fetch(todoApi + queryString, {
        method: "GET",
        mode:"no-cors",
    })
    const data = await response.json();
    return data;
}
const showTodo = async (type = "all", keyword = null) => {
    if (todoList.innerHTML.trim() === '') {
        todoList.innerHTML = `<div class="mt-2.5 flex w-full items-center justify-center bg-white p-4 rounded-lg border border-gray-200 shadow">Đang tải!</div>`
    }
    const listData = [];
    if (type === 'all' || type === 'todo') {
        listData.push({
            cb: getTodo,
            isDone: false
        })
    }
    if (type === "all" || type === "done") {
        listData.push({
            cb: getTodo,
            isDone: true
        })
    }
    let [todo, todoDone] = await Promise.all(listData.map(({ cb, isDone }) => cb(isDone)));

    if (type === "done") {
        todoDone = todo;
    }
    if (type == 'all' || type === "todo") {
        if (todo && todo.length) {
            todoList.innerHTML = renderTodo(todo, keyword, false);
        } else {
            todoList.innerHTML = `<div class="mt-2.5 flex w-full items-center justify-center bg-white p-4 rounded-lg border border-gray-200 shadow">Hãy thêm nhiệm vụ cần làm!</div>`;
        }
    }

    if (type == 'all' || type === 'done') {
        if (todoDone && todoDone.length) {
            todoListDone.innerHTML = renderTodo(todoDone, keyword, true);
        } else {
            todoListDone.innerHTML = `<div class="mt-2.5 flex w-full items-center justify-center bg-white p-4 rounded-lg border border-gray-200 shadow">Chưa có nhiệm vụ nào hoàn thành!</div>`;
        }
    }

    todoDone && (count.innerText = todoDone.length);
}

const renderTodo = (todoList, keyword, isDone = false) => {
    return todoList.map(todo => `<div class="mt-2.5 flex w-full items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow">
                            <span class="font-normal text-gray-700">${highlight(todo.name, keyword)}</span>
                            <div class="flex gap-2">
                                <button type="button" data-type="delete-todo" data-id="${todo.id}" data-doing="${isDone ? 'done' : 'todo'}" class="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 pointer-events-none" viewBox="0 0 448 512">
                                        <path class="fill-white" d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path>
                                    </svg></button>
                                    <button type="button" data-id="${todo.id}" data-type="edit-todo" class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 pointer-events-none" viewBox="0 0 512 512" style="margin-right: -1px">
                                        <path class="fill-white" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path>
                                    </svg></button>
                                    <button type="button" data-type="${isDone ? 'no-done' : 'done'}" data-id="${todo.id}" class="${isDone ? `bg-emerald-700` : `bg-gray-400`} flex h-10 w-10 items-center justify-center rounded-lg hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 pointer-events-none" viewBox="0 0 576 512">
                                        <path class="fill-white" d="M96 80c0-26.5 21.5-48 48-48H432c26.5 0 48 21.5 48 48V384H96V80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48H64V416H512V288h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>`).join('');
}

const highlight = (string, keyword = null) => {
    if (keyword === null) {
        return string;
    }
    let output = "";
    keyword = "" + `${keyword}`;
    let position = string.toLowerCase().indexOf(keyword.toLowerCase());
    while (position !== -1) {
        output += (string.slice(0, position)) + `<span class="bg-blue-100 font-bold">${string.slice(position, position + keyword.length)}</span>`;
        string = string.slice(position + keyword.length);
        position = string.toLowerCase().indexOf(keyword.toLowerCase());
    }
    output += string;
    return output;
}

const eventAll = () => {
    document.body.addEventListener('click', (e) => {
        /**
         * Tất cả nên xử lý qua target === router đỡ phải gọi lại nhiều
         */

        switch (e.target.dataset.type) {
            case 'show-form-add':
                showFormAdd();
                break;
            case 'add-todo':
                addTodo();
                break;
            case 'cancel-form-add':
                cancelFormAdd();
                break;
            case "done":
                doneToDo(e.target.dataset.id);
                break;
            case 'show-done':
                if (e.target.classList.contains('bg-gray-400')) {
                    e.target.classList.remove('bg-gray-400');
                    e.target.classList.add('bg-emerald-700');
                    e.target.querySelector('svg').classList.remove('-rotate-90');
                } else {
                    e.target.classList.remove('bg-emerald-700');
                    e.target.classList.add('bg-gray-400');
                    e.target.querySelector('svg').classList.add('-rotate-90');
                }
                showTodoDone();
                break;
            case 'no-done':
                doneToDo(e.target.dataset.id, false);
                break;
            case 'delete-todo':
                deleteTodo(e.target.dataset.id, e.target.dataset.doing);
                break;
            case 'edit-todo':
                editTodo(e.target.dataset.id);
                break;
        }
    })

    let timeout = null;
    inputSearch.addEventListener('input', function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            query.q = this.value.trim()
            if (this.value.trim() === "") {
                delete query.q;
            };

            showTodo("all", query.q);
        }, 600);
    })
}
formAdd.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { method, isDone, type, id } = formAdd.dataset;
    const formData = Object.fromEntries([...new FormData(e.target)]);
    formData.is_done = isDone === "true";
    await fetch(todoApi + (id ? '/' + id : ''), {
        method,
        headers: {
            'Content-Type': "application/json"
        },
        mode:"no-cors",
        body: JSON.stringify(formData)
    });
    cancelFormAdd();
    showTodo(type, query.q);
})

const showFormAdd = (todo = null) => {
    if (addModal.classList.contains('z-[-1]')) {
        addModal.classList.remove('z-[-1]');
        addModal.classList.add('z-10');
        formAdd.dataset.method = todo ? "PATCH" : 'POST';
        if (todo) {
            formAdd.dataset.id = todo.id;
            formAdd.dataset.isDone = todo.is_done;
            formAdd.dataset.type = todo.is_done ? 'done' : 'todo';
            addModal.querySelector('input').value = todo.name;
        } else {
            formAdd.dataset.type = "todo";
            addModal.querySelector('input').value = '';
        }
        addModal.querySelector('input').focus();
    } else {
        addModal.classList.add('z-[-1]');
        addModal.classList.remove('z-10');
    }
}


const cancelFormAdd = () => {
    if (addModal.classList.contains('z-10')) {
        addModal.classList.remove('z-10');
        addModal.classList.add('z-[-1]');
        addModal.querySelector('input').value = '';
        Object.entries(formAdd.dataset).forEach(([key]) => {
            delete formAdd.dataset[key];
        })
    }
}
const showTodoDone = () => {
    if (todoListDone.classList.contains('hidden')) {
        todoListDone.classList.remove('hidden');
    } else {
        todoListDone.classList.add('hidden');
    }
}
const doneToDo = async (id, isDone = true) => {
    await fetch(todoApi + `/${id}`, {
        method: "PATCH",
        mode:"no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            is_done: isDone
        })
    });
    showTodo('all', query.q);
}

const deleteTodo = async (id, type) => {
    await fetch(todoApi + `/${id}`, {
        method: "DELETE",
        mode:"no-cors",
    });
    showTodo(type, query.q);
}

const editTodo = async (id) => {
    const response = await fetch(todoApi + `/${id}`, {
        method: 'GET',
        mode:"no-cors"
    })
    const todo = await response.json();
    showFormAdd(todo);
}

window.addEventListener('DOMContentLoaded', function () {
    eventAll();
    showTodo();
})