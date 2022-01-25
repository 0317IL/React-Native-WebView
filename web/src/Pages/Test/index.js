import React, {useState} from 'react';

import EventAlert from './EventAlert';
import EventConsole from './EventConsole';
import ToDoList from './ToDoList';
import EventString from './EventString';

export default function Function() {
  const [page, setPage] = useState(0);

  if(page === 0){
    return(
      <div className='container'>
        <h1 className='txt'>Escolha uma opção</h1>

        <button className='button' onClick={() => setPage(1)}>Alert</button>
        <button className='button' onClick={() => setPage(2)}>Console.log</button>
        <button className='button' onClick={() => setPage(3)}>To Do List</button>
        <button className='button' onClick={() => setPage(4)}>Valores input</button>
      </div>
    );

  }else if(page === 1){
    return(
      <>
        <EventAlert />

        <div className='back'>
          <button className='button' onClick={() => setPage(0)}>Voltar</button>
        </div>
      </>
    );
  }else if(page === 2){
    return(
      <>
        <EventConsole state={setPage}/>

        <div className='back'>
          <button className='button' onClick={() => setPage(0)}>Voltar</button>
        </div>
      </>
    )
  }else if(page === 3){  
    return(
      <>
      <ToDoList />

      <div className='back'>
          <button className='button' onClick={() => setPage(0)}>Voltar</button>
      </div>      
      </>
    );
  }else if(page === 4){
    return(
      <>
        <EventString />

        <div className='back'>
          <button className='button' onClick={() => setPage(0)}>Voltar</button>
        </div>
      </>
    )
  }
}
