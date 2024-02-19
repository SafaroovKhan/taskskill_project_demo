import React, {useState} from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Navbar from '../NavBar/Navbar'
import ToDoColumn from './ToDoColumn'
import ProfileFooter from '../Profile/Profile Components/Profile Footer/ProfileFooter.jsx'

export default function ToDoPage() {

    const [columns, setColumns] = useState([]);

    const addColumn = () => {
        const newKey = columns.length + 1;
        setColumns([...columns, { key: newKey, id: `column-${newKey}`, tasks: [] }]);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        if (result.type === 'column') {
            const newColumns = Array.from(columns);
            const [movedColumn] = newColumns.splice(result.source.index, 1);
            newColumns.splice(result.destination.index, 0, movedColumn);
            setColumns(newColumns);
        }
    };
    

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <Navbar/>
        <div className="todo-page">
            <div className="todo-page-container">
                <div className="todo-page-container-task-manager-box">
                    <div className="todo-page-container-task-manager-box-top-section">
                        <div className="todo-page-container-task-manager-box-top-section-left">
                            <button className="todo-page-container-task-manager-box-top-section-left-btn">
                                <i className="fa-solid fa-table-columns todo-page-container-task-manager-box-top-section-left-btn-icon"></i>
                            </button>
                            <button className="todo-page-container-task-manager-box-top-section-left-btn">
                                <i className="fa-solid fa-square-poll-horizontal todo-page-container-task-manager-box-top-section-left-btn-icon"></i>
                            </button>
                            <h1 className="todo-page-container-task-manager-box-top-section-left-header-txt">
                                Board
                            </h1>
                        </div>
                        <div className="todo-page-container-task-manager-box-top-section-right">
                            <button className="todo-page-container-task-manager-box-top-section-right-sort-btn">
                                <i class="fa-solid fa-right-left todo-page-container-task-manager-box-top-section-right-sort-btn-icon"></i>
                                Sort
                            </button>
                            <button className="todo-page-container-task-manager-box-top-section-right-add-btn" onClick={addColumn}>
                                <i class="fa-solid fa-plus todo-page-container-task-manager-box-top-section-right-add-btn-icon"></i>
                                Add Column
                            </button>
                        </div>
                    </div>
                    <div className="todo-page-container-task-manager-box-task-board-section">
                        <div className="todo-page-container-task-manager-box-task-board-section-container">
                            {columns.map((column, index) => (
                                <ToDoColumn key={column.key} id={column.id} columnHeaderTxt={`Column ${column.key}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProfileFooter/>
    </DragDropContext>
  )
}
