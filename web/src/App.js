import React, { useState } from "react";
import './App.css';
import Test2 from "./Pages/Test2";
import Test from "./Pages/Test";

export default function App(){
    const [page, setPage] = useState(0);
    if(page === 0){
        return(
            <div style={{display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#ebebeb', alignItems: 'center', justifyContent: 'center'}}>
                <h1 style={{marginBottom: 20}}>Escolha uma opção:</h1>
                <button style={{width: 100, height: 40, backgroundColor: '#fff', borderRadius: 4, marginBottom: 20 }} onClick={() => setPage(1)}>Testar Eventos</button>
                <button  style={{width: 150, height: 40,  backgroundColor: '#fff', borderRadius: 4}} onClick={() => setPage(2)}>Testar Envio de Dados</button>
            </div>
        );
    }else if(page === 1){
        return(
            <Test state={setPage}/>
            );
    }else if(page === 2){
        return(
            <Test2 state={setPage}/>
            );
    }
}