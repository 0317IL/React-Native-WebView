import React, {useState} from "react";

export default function EventAlert(){
    const [txt, setTxt] = useState('');

    const click = (a) => {
        alert(`${a}`);
        setTxt('');
       }

    return (
        <div className='container-alert'>
          <h1 className='txt'>TESTE EVENT ALERT</h1>
  
          <div>
            <input className='input' type='text' value={txt} onChange={(e) => setTxt(e.target.value)}/>
            <input className='input-btn' type='submit' onClick={() => click(txt)}/>
          </div>
        </div>
      );
}