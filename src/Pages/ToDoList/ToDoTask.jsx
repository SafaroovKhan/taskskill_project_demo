import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default function ToDoTask({ task, index }) {
  const { todoHeader, todoTxt } = task;

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="todo-task"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="todo-task-container">
            <div className="todo-task-container-top-section">
              <div className="todo-task-container-top-section-left">
                <div className="todo-task-container-top-section-left-date-dot"></div>
                <h1 className="todo-task-container-top-section-left-date-txt">New</h1>
              </div>
              <div className="todo-task-container-top-section-right">
                <button className="todo-task-container-top-section-right-btn">
                  <i className="fa-solid fa-ellipsis todo-task-container-top-section-right-btn-icon"></i>
                </button>
              </div>
            </div>
            <div className="todo-task-container-task-box">
              <h1 className="todo-task-container-task-box-header-txt">{todoHeader}</h1>
              <p className="todo-task-container-task-box-txt">{todoTxt}</p>
            </div>
            <div className="todo-task-container-bottom-section">
              <button className="todo-task-container-bottom-section-btn">
                <i className="fa-solid fa-arrow-up-right-from-square todo-task-container-bottom-section-btn-icon"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
