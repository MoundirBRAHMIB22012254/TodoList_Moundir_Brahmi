import React, { useState } from 'react';
import './AddTask.css';

function AddTask({ onAdd }) {
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (!newTask.trim()) return;
        onAdd(newTask);
        setNewTask('');
    };

    return (
        <div className="add-task">
            <input
                type="text"
                className="add-task-input"
                placeholder="Ajouter une nouvelle tâche"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
            />
            <button className="add-task-button" onClick={addTask}>Ajouter</button>
        </div>
    );
}

export default AddTask;
