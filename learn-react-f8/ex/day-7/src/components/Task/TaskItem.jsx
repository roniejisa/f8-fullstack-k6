/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../store/middlewares/taskMiddleware";
import { changeEditTask, changeNameTask } from "../../store/reducers/taskSlice";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useState } from "react";

const TaskItem = ({ data,disabled }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(data.content);
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: data._id,
        data: { ...data, type: "task" },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };
    const contentDebounce = useDebounce(data.content, 500);
    const handleDeleteTask = () => {
        dispatch(deleteTask(data));
    };

    useEffect(() => {
        if (contentDebounce !== value) {
            dispatch(
                updateTask({
                    id: data._id,
                    value: contentDebounce,
                })
            );
            setValue(contentDebounce);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentDebounce]);

    const handleChangeEdit = () => {
        dispatch(changeEditTask(data._id));
    };

    const handleChangeValue = (e) => {
        dispatch(
            changeNameTask({
                id: data._id,
                value: e.target.value,
            })
        );
    };
    return (
        <div
            disabled={disabled}
            onClick={() => {
                data.noEdit && dispatch(changeEditTask(null));
            }}
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="p-1 rounded-md flex bg-[#ccc] gap-4 group border group-hover:border-teal-500 "
        >
            <textarea
                className={`p-1 outline-none w-full rounded-md border border-transparent ${
                    data.noEdit ? "bg-transparent" : "bg-white"
                } resize-none`}
                readOnly={data.noEdit}
                onDoubleClick={handleChangeEdit}
                value={data.content}
                onChange={handleChangeValue}
            />
            {data.noEdit && (
                <button className="hidden group-hover:block" onClick={handleDeleteTask}>
                    Xóa
                </button>
            )}
        </div>
    );
};

export default TaskItem;
