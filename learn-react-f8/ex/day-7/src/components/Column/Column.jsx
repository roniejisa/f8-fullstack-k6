/* eslint-disable react/prop-types */
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskItem from "../Task/TaskItem";
import { useDispatch } from "react-redux";
import { addTask, deleteColumn } from "../../store/middlewares/taskMiddleware.js";
import { changeEditColumn, changeNameColumn } from "../../store/reducers/taskSlice.js";
import ColumnContainer from "./ColumnContainer.jsx";
const Column = ({ data, tasks, activeColumn }) => {
    const dispatch = useDispatch();
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: data._id,
        data: { ...data, type: "column" },
    });
    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        height: "auto",
    };
    const handleAddTask = () => {
        dispatch(addTask(data));
    };

    const handleDeleteColumn = () => {
        if (confirm("Bạn có muốn xóa bảng này không")) {
            dispatch(deleteColumn(data));
        }
    };

    const handleChangeNameColumn = (e) => {
        dispatch(
            changeNameColumn({
                id: data._id,
                value: e.target.value,
            })
        );
    };

    const handleChangeEdit = () => {
        dispatch(changeEditColumn(data._id));
    };
    return (
        <div ref={setNodeRef} style={style} {...attributes} className="w-full max-w-[250px] flex-shrink-0">
            <div className=" bg-[#99999940]" {...listeners}>
                <div className="bg-white flex gap-3 px-2">
                    <h1 className="p-2 w-full">
                        <input
                            type="text"
                            value={data.columnName}
                            onChange={handleChangeNameColumn}
                            readOnly={data.noEdit}
                            onClick={handleChangeEdit}
                            className="outline-none hover:outline-teal-500 px-2 rounded-md w-full"
                        />
                    </h1>
                    {data.noEdit && <button onClick={handleDeleteColumn}>Xóa</button>}
                </div>
                {tasks.length > 0 && (
                    <ColumnContainer>
                        <SortableContext items={tasks.map(({ _id }) => _id)} strategy={verticalListSortingStrategy}>
                            {tasks.map((item) => (
                                <TaskItem
                                    key={item._id}
                                    data={item}
                                    disabled={activeColumn && activeColumn.column !== data.column ? true : false}
                                />
                            ))}
                        </SortableContext>
                    </ColumnContainer>
                )}
                <button className="p-3 bg-white w-full" onClick={() => handleAddTask()}>
                    Add Tasks
                </button>
            </div>
        </div>
    );
};

export default Column;
