import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const newTask = document.getElementById("task").value;
    document.getElementById("task").value = "";

    setTasks(t => [...t, { text: newTask, completed: false }]);
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function tickTask(index) {
    setTasks(tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  }

  function upTask(index){
      if(index>0){
        const updatedtasks=[...tasks];
        [updatedtasks[index],updatedtasks[index-1]]=[updatedtasks[index-1],updatedtasks[index]];
        setTasks(updatedtasks);

      }
  }

  function downTask(index){
    if(index<tasks.length-1){
      const updatedtasks=[...tasks];
      [updatedtasks[index],updatedtasks[index+1]]=[updatedtasks[index+1],updatedtasks[index]];
      setTasks(updatedtasks);

    }
}

  return (
    <>
      <h1>To Do App</h1>
      
      <div className="input">
        <input type="text" id="task" placeholder="Enter your task" className="task-input" />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span id='item' className={task.completed ? 'task-completed' : ''}>{task.text}</span>
            <button className="remove-button" onClick={() => removeTask(index)}>✖️</button>
            <button className="tick-button" onClick={() => tickTask(index)}>✔️</button>
            <button className="arrow-button" onClick={() => upTask(index)}>⬆️</button>
            <button className="arrow-button" onClick={() => downTask(index)}>⬇️</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
