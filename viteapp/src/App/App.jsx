import React, { useState } from 'react';
import './App.css';
import Task from '../Task/Task';
import AddTask from '../AddTask/AddTask';

function App() {
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [editText, setEditText] = useState('');

    const addNewTask = (taskText) => {
        setTasks([...tasks, { id: Date.now(), text: taskText, isCompleted: false }]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const startEditing = (index) => {
        setEditIndex(index);
        setEditText(tasks[index].text);
    };

    const saveEdit = () => {
        if (!editText.trim()) return;
        const newTasks = [...tasks];
        newTasks[editIndex] = { ...newTasks[editIndex], text: editText };
        setTasks(newTasks);
        setEditIndex(-1);
        setEditText('');
    };

    const toggleTaskCompletion = (taskId) => {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        });
        setTasks(newTasks);
    };

    return (
        <div className="app">
            <h1>ToDoList</h1>
            <AddTask onAdd={addNewTask}/>
            <ul>
                {tasks.map((task, index) => (
                    <Task
                        key={task.id}
                        task={task}
                        index={index}
                        toggleTaskCompletion={toggleTaskCompletion}
                        startEditing={() => startEditing(index)}
                        deleteTask={deleteTask}
                        isEditing={editIndex === index}
                        editText={editText}
                        setEditText={setEditText}
                        saveEdit={saveEdit}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
