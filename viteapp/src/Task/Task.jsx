import React from 'react';
import './Task.css'; // Importez le CSS spécifique au composant Task

function Task({ task, index, toggleTaskCompletion, startEditing, deleteTask, isEditing, editText, setEditText, saveEdit }) {
    const handleEditChange = (e) => setEditText(e.target.value);

    const handleEditKeyPress = (e) => {
        if (e.key === 'Enter') {
            saveEdit();
        }
    };

    return (
        <li className={task.isCompleted ? 'task-completed' : ''}>
            <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            {isEditing ? (
                <input
                    type="text"
                    className="edit-text"
                    value={editText}
                    onChange={handleEditChange}
                    onBlur={saveEdit}
                    onKeyPress={handleEditKeyPress}
                    autoFocus
                />
            ) : (
                <span className="task-text" onDoubleClick={() => startEditing(index)}>
          {task.text}
        </span>
            )}
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
            <button onClick={() => startEditing(index)}>Modifier</button>
        </li>
    );
}

export default Task;
