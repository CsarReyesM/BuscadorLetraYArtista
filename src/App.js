import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import axios from 'axios';

function App() {
  const [busquedaDatos, setBusquedaDatos] = useState({});
  const [letra, setLetra] = useState('');
  const [info, setInformacion] = useState({});

  useEffect(() => {
    // La primera vez no validar
    if(Object.keys(busquedaDatos).length===0) return;
    const consultarApi = async () => {
      const {cancion, artista} = busquedaDatos;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      //console.log(respuesta.data.lyrics);
      const [letra, informacion] = await Promise.all([
        axios(url), 
        axios(url2)
      ]);
      //console.log(informacion.data.artists[0])
      //console.log(letra)
      setLetra(letra.data.lyrics);
      setInformacion(informacion.data.artists[0])

    }
    consultarApi();
    

  }, [busquedaDatos, info])
  
  return (
    <>
    <Formulario 
      setBusquedaDatos={setBusquedaDatos}
    />
    <Resultado letra={letra} info={info} />
    </>
  );
}

export default App;
