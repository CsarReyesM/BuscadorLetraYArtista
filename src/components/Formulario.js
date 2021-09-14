import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({setBusquedaDatos}) => {
    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, setError] = useState(false);
    const {artista, cancion} = busqueda;
    const guardarDatos = e => {
        
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    const buscarInformacion = e => {
        e.preventDefault();
        if(artista.trim() === '' || cancion.trim() ===''){
            setError(true);
            return;
        }
        setError(false);
        setBusquedaDatos(busqueda);
    }
    return ( 
        <div className="bg-info">
            <div className="container">
                    {error ? <Error mensaje="Llena todos los campos" />: null }
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-g pt-5 pb-2"
                        onSubmit={buscarInformacion}
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artista">Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            id="artista"
                                            onChange={guardarDatos}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="cancion">Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Canción"
                                            id="cancion"
                                            onChange={guardarDatos}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                        
                    </form>
                </div>
            </div>
        </div>


    );
}
 
export default Formulario;