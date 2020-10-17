import React, { useState, useEffect  } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

function App(){
    const [ videos, setVideos ] = React.useState({
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
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    console.info(videos);

    return(
        <div className="App">
            <Header />
            <Search />
           
           {videos.mylist.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
           }

            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Footer />
        </div>
    )
}

export default App