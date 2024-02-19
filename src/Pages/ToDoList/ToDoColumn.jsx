import React, { useState } from 'react';
import ToDoTask from './ToDoTask';
import { Droppable } from 'react-beautiful-dnd';

export default function ToDoColumn({ id, columnHeaderTxt }) {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const taskId = new Date().getTime().toString();
    const newTask = {
      id: taskId,
      todoHeader: 'New Task',
      todoTxt: 'Task description',
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };


  return (
    <>
      <div className="todo-column">
        <div className="todo-column-container">
          <div className="todo-column-container-top-section">
            <h1 className="todo-column-container-top-section-header-txt">
              {columnHeaderTxt}
            </h1>
            <div className='todo-column-container-top-section-btn-box'>
              <button className="todo-column-container-top-section-btn" onClick={addTask}>
                <i class="fa-solid fa-plus todo-column-container-top-section-btn-icon"></i>
              </button>
              <button className="todo-column-container-top-section-btn">
                <i className="fa-solid fa-ellipsis todo-column-container-top-section-btn-icon"></i>
              </button>
            </div>
          </div>
          <Droppable droppableId={id}>
            {(provided) => (
              <div
                className="todo-column-container-task-box"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks.map((task, index) => (
                  <ToDoTask
                    key={task.id}
                    task={task}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </>
  );
}
