import React, {useState, useEffect} from 'react';

export default function Tasks(){
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    window.addEventListener('add-task', event => {
        setTasks(oldTasks =>[
            ...oldTasks,
            event.detail,
        ])
    })
  }, [])

  return(
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <br></br>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}