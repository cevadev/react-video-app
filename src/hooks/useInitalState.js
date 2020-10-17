import { useState, useEffect } from 'react';

/**
 * Funcion que maneja el estado y ciclo de vida del componente
 */
function useInitalState(API){
    const [ videos, setVideos ] = useState({
        mylist: [],
        trends: [],
        originals: []
    });

    /**
     * useEffect nos permite ir a una API obtener datos para luego pasarla a la funcion setVideos para actualizar a la variable videos
     * useEffect recibe una función anonima
     * 1. fetch(API) -> recibe una url de nuestra api
     * 2. Cuando la API responsa la peticion, a la respuesta la convertimos en json para trabjar con ella
     * 3. La información como resultado de la llamada la pasamos a la función setVideos()
     *  
     * useEffect recibe un segundo parametro que me mantiene escuchando alguna propiedad que pueda cambiar y asi volver a ejecutarse
     * si no le pasamos esta propiedad useEffect creara un loop infinito.
     * Lo que nosotros queremos es que se llame una primera vez y poder trsnmitir los datos a nuestro estado, para ellos
     * pasamos el 2do argumento como un arreglo vacio
     */
    useEffect(()=>{
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    //retornamos el estado
    return videos;
}

export default useInitalState