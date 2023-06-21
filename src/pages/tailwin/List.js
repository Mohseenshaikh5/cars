import React from 'react';
import TaskItem from './Tailwin';

const TaskList = ({ tasks, onDelete }) => {
    return (
        <div>
            {tasks.map((task, index) => (
                <TaskItem key={index} task={task} onDelete={() => onDelete(index)} />
            ))}
        </div>
    );
};

export default TaskList;