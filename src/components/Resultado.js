import React from 'react';
import Letra from './Letra';
import Datos from './Datos';

const Resultado = ({letra, info}) => {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <Datos info={info} />
                </div>
                <div className="col-md-6">
                    <Letra letra={letra} />
                </div>
            </div>
        </div>
     );
}
 
export default Resultado;