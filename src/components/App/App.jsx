import React from 'react';
import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  let [gallery, setGallery] = useState([]);

    useEffect(()=>{
      getGallery();
    }, [])

    const getGallery = () => {
      console.log('getting gallery!');

      axios.get('/gallery')
        .then(response => {
          console.log('got the gallery!');
          setGallery(response.data);
          // console.log('gallery incoming', gallery);
        })
        .catch(err=>{
          console.error('Error getting gallery', err);
        })      
    }

    const putGallery = () => {
      console.log('putting gallery!')

    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Animal Gallery</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <GalleryList gallery={gallery} putGallery={putGallery}/>
      </div>
    );
}

export default App;
