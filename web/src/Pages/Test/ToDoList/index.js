import React, {useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import Tasks from './Tasks';

export default function ToDoList({name}){
  const [task, setTask] = useState ('');

  const handleChange = event => {
    setTask(event.target.value)
    
  }

  const handleSubmit = event =>{
    event.preventDefault()
    dispatchEvent(new CustomEvent('add-task',
        {detail: {
            id: uuid(),
            describe: task,
        }},
        ))
    console.log(task)
    setTask('')
  }

  return(
    <div className='container-todo'>
        <div className='form-todo'>
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} value={task} className='input-todo'/>
                <button className='btn-input-todo'>Add</button>
            </form>
        </div>

      <Tasks />
    </div>
  );
}

