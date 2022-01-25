 import React, {useState} from "react";

 export default function EventConsole({state}){
    const [txt, setTxt] = useState('');

    const click2 = (a) => {
        console.log(`${a}`);
        setTxt('');
       }

    return(
        <div className='container-console'>
          <h1 className='txt'>TESTE EVENT CONSOLE</h1>
  
          <div>
            <input className='input' type='text' value={txt} onChange={(e) => setTxt(e.target.value)}/>
            <input className='input-btn' type='submit' onClick={() => click2(txt)}/>
          </div>

          <div className='back'>
            <button className='button' onClick={() => state(0)}>Voltar</button>
          </div>
        </div>
      );
 }