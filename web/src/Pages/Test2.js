import React, { useState } from 'react';

export default function Class({state}){
  const [txt, setTxt] = useState('');

    //Função de recebimento dos dados enviados do Mobile
    document.addEventListener("message", function(event){
      setTxt(event.data);
    });   

    //Função para envio de dados do Web para o Mobile
    function sendDataToMobile() {
      window.ReactNativeWebView.postMessage(`${JSON.stringify(txt)}`);
    };
 
    return(
      <>
        <div id='teste' style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#6751ff',}}>
         <input onChange={(e) => setTxt(e.target.value)} style={{width: 250, height: 25, backgroundColor: '#fff', borderColor: '#ebebeb', borderRadius3: 3}}></input>

          <div id='teste2' style={{marginBottom: 20, fontSize: 40}}></div>
            <button
             onClick={() => sendDataToMobile()}
              style={{ padding: 20,
                width: 200,
                fontSize: 18,
                backgroundColor: '#ddd',
                borderRadius: 3,
                borderColor: '#fff',
                borderWidth: 3,
                marginBottom: 10
              }}>
              Enviar para Mobile
            </button>

            <button
             onClick={() => state(0)}
              style={{ padding: 20,
                width: 100,
                fontSize: 18,
                backgroundColor: '#ddd',
                borderRadius: 5,
                borderColor: '#fff',
                borderWidth: 3,
              }}>
              Voltar
            </button>
        </div>
      </>
    );
}
