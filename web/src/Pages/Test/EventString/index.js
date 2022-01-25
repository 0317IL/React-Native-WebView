import React from "react";

export default function EventString(){
    const Character = (setPage) => {
        let caracter = document.getElementById('entrance').value
        document.getElementById('entrance').value = '';

        switch(caracter){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                document.getElementById('numero').value += caracter
                break;
            default:
                document.getElementById('letra').value += caracter
                
        }
    }

    return(
        <div className="container-ES">
            <input className='inpts' type='text' placeholder="Digite algo" onKeyUp={() => Character()} id='entrance'/>

            <div>
                <span className="txt-inpts">Letras:</span>
                <input className='inpts' type='text' disabled='disable' id='letra'/>

                <span className="txt-inpts">Números:</span>
                <input className='inpts' type='text' disabled='disable' id='numero'/>
            </div>
        </div>
    );
}