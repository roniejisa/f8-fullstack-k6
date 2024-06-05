import Column from "../Column/Column";
import PropTypes from "prop-types";
import {
    DndContext,
    PointerSensor,
    TouchSensor,
    MouseSensor,
    useSensor,
    useSensors,
    DragOverlay,
    closestCorners,
} from "@dnd-kit/core";
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColumn, dragColumn, dragTask } from "../../store/reducers/taskSlice";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const { tasks, status } = useSelector((state) => state.task);
    const dispatch = useDispatch();
    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: { distance: 10 },
    });
    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: { distance: 10 },
    });
    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: { delay: 250, tolerance: 500 },
    });
    const sensors = useSensors(pointerSensor, mouseSensor, touchSensor);

    const columnIds = useMemo(() => (Array.isArray(tasks.columns) ? tasks.columns.map(({ _id }) => _id) : []), [tasks]);
    const [activeColumn, setActiveColumn] = useState();
    const [dataActiveColumn, setDataActiveColumn] = useState();
    const [activeTask, setActiveTask] = useState();
    const handleAddColumn = () => {
        dispatch(addColumn());
    };

    const handleDragEnd = () => {
        setDataActiveColumn(null);
        setActiveColumn(null);
        setActiveTask(null);
    };

    const handleDragOver = (event) => {
        // Việc xử lý tính toán không nên chuyển sang dispatch vì bị re render
        const typeActive = event.active.data.current.type;
        const { active, over } = event;
        if (!over || active.id === over.id) return false;
        const typeOver = over.data.current.type;
        // Kiểm tra xem nó đang ở column nào
        if (typeActive === "column") {
            // Nếu over là task nằm trong column active thì cũng bỏ
            // Cần kiểm tra containerId nếu khác nhau nữa thì mới cho đổi
            // Kiểm tra nếu over đang là item thì phải lấy tên và lấy thằng column
            const activeIndex = tasks.columns.findIndex((column) => column._id === active.id);
            let overIndex = tasks.columns.findIndex((column) => {
                if (typeOver === "task") {
                    return column.column === over.data.current.column;
                } else {
                    return column._id === over.id;
                }
            });

            if (overIndex === -1 || activeIndex === overIndex) return false;
            dispatch(
                dragColumn({
                    typeActive,
                    activeIndex,
                    overIndex,
                })
            );
        } else {
            const { column: columnOver } = over.data.current;
            const { column: columnActive } = active.data.current;
            const activeIndex = tasks.tasks.findIndex((task) => task._id === active.id);
            const overIndex = tasks.tasks.findIndex((task) => task._id === over.id);
            dispatch(
                dragTask({
                    typeActive,
                    activeIndex,
                    overIndex,
                    columnOver,
                    columnActive,
                })
            );
        }
    };

    const handleDragStart = (event) => {
        const activeType = event.active.data.current.type;
        if (activeType === "column") {
            const activeColumn = tasks.columns.find((column) => column._id === event.active.id);
            const columnTasks = tasks.tasks.filter((task) => task.column === activeColumn.column);
            setDataActiveColumn(columnTasks);
            setActiveColumn(activeColumn);
        } else if (activeType === "task") {
            const activeTask = tasks.tasks.find((task) => task._id === event.active.id);
            setActiveTask(activeTask);
        }
    };
    return (
        <DndContext
            collisionDetection={closestCorners}
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
        >
            <div className="h-screen bg-teal-300 overflow-hidden flex items-center">
                {status === "success" && (
                    <div className="flex gap-3 py-10 overflow-auto w-full">
                        {tasks.columns && (
                            <SortableContext items={columnIds} strategy={horizontalListSortingStrategy}>
                                {tasks.columns.map((data) => {
                                    const columnTasks = tasks.tasks.filter((task) => task.column === data.column);
                                    return <Column key={data._id} data={data} tasks={columnTasks} activeColumn={activeColumn} />;
                                })}
                            </SortableContext>
                        )}
                        <DragOverlay>
                            {activeColumn && <Column data={activeColumn} tasks={dataActiveColumn} />}
                            {activeTask && <TaskItem data={activeTask} />}
                        </DragOverlay>
                        <button onClick={handleAddColumn} className="p-3 bg-white rounded-md self-start">
                            + Add Column
                        </button>
                    </div>
                )}
            </div>
        </DndContext>
    );
};

export default TaskList;

TaskList.propTypes = {
    tasks: PropTypes.any,
};
