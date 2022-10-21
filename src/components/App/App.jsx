import React from 'react';
import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  let [gallery, setGallery] = useState([]);
  // let [clicked, setClicked] = useState(false);

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

    const putGallery = (itemId) => {
      console.log('putting gallery!')

      axios.put(`/gallery/click/${itemId}`)
        .then(response =>{
          console.log('swapping')
          getGallery();
        })
        .catch(err=>{
          console.error('cannot swap values', err);
        })
    }

    const likeImage = (itemId) => {
      axios.put(`/gallery/like/${itemId}`)
        .then(response =>{
          console.log("liking image");
          getGallery();
        })
        .catch(err =>{
          console.error('cannot like image', err);
        })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Animal Gallery</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList gallery={gallery} putGallery={putGallery} likeImage={likeImage} />
      </div>
    );
}

export default App;
