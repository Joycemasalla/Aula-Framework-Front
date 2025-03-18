import React from "react";

 function MeuComponente(props) {
    return (
        <div>
            <h1>Meu primeiro Componente</h1>
            <p>Criando meu componente</p>
            <p>{props.texto}</p>
        </div>
    )
}

export default MeuComponente;