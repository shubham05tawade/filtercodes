import './App.css';
import React, {useState} from 'react';

function App() {

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(["Moring Tea",
  "Read Emails",
  "Client call at 9 A.M.",
  "Evening Yoga Class"]);

  const addTask = () => {
    setTasks([...tasks, input]);
    setInput('');
  }

  const delTask = (event) => {
    event.preventDefault();
    const newTasks = [...tasks];
    newTasks.splice(event.target.value,1);
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <h1 className="todo__title">TODO APP</h1>
      <div className="todo__form">
        <input className="todo__input" onChange={(e) => {setInput(e.target.value)}} value={input}/>
        <button onClick={addTask} className="todo__btn">ADD TASK</button>
      </div>
      <div className="todo__description">
      {
        tasks.map((task, index) => (
            <p>{index + 1 + ". "}{task}<span onClick={delTask} value={index}>&#9747;</span></p>
        ))
      }
      </div>
    </div>
  );
}

export default App;
