import React, {useState} from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

export default function App() {
  const [txt, setTxt] = useState('');
  const [page, setPage] = useState(0);

  const click = (a) => {
   alert(`${a}`);
   setTxt('');
  }

  const click2 = (a) => {
   console.log(`${a}`);
   setTxt('');
  }

  if(page === 0){
    return(
      <div className='container'>
        <h1 className='txt'>Escolha uma opção</h1>

        <button className='button' onClick={() => setPage(1)}>Alert</button>
        <button className='button' onClick={() => setPage(2)}>Console.log</button>
        <button className='button' onClick={() => setPage(3)}>To Do List</button>
      </div>
    );

  }else if(page === 1){
    return (
      <div className='container-alert'>
        <h1 className='txt'>TESTE EVENT ALERT</h1>

        <div>
          <input className='input' type='text' value={txt} onChange={(e) => setTxt(e.target.value)}/>
          <input className='input-btn' type='submit' onClick={() => click(txt)}/>
        </div>

        <div className='back'>
          <button className='button' onClick={() => setPage(0)}>Voltar</button>
        </div>
      </div>
    );

  }else if(page === 2){
    return(
      <div className='container-console'>
        <h1 className='txt'>TESTE EVENT CONSOLE</h1>

        <div>
          <input className='input' type='text' value={txt} onChange={(e) => setTxt(e.target.value)}/>
          <input className='input-btn' type='submit' onClick={() => click2(txt)}/>
        </div>

        <div className='back'>
          <button className='button' onClick={() => setPage(0)}>Voltar</button>
        </div>
      </div>
    );
  }else if(page === 3){  
    return(
      <ToDoList />
    );
  }
}
