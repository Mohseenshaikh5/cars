import React, { useState } from 'react'
import TaskList from './List';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <>
            <div className="container mx-auto p-10">
                <h1 className="text-2xl mb-4">Task Management</h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        className="flex-grow border rounded-l py-2 px-4 mr-2"
                        placeholder="Enter task"
                        value={newTask}
                        onChange={handleInputChange}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                        onClick={handleAddTask}
                    >
                        Add Task
                    </button>
                </div>
                <TaskList tasks={tasks} onDelete={handleDeleteTask} />
            </div>
            {/* <div className='md:container md:mx-auto'>
        <Tailwin />
      </div> */}
        </>
    );
}

export default ToDoList