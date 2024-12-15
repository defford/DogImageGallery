import React, { useState } from 'react';
import Selector from './components/Selector';
import Gallery from './components/Gallery';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [showGallery, setShowGallery] = useState(false);

  const fetchImages = async (breed, num) => {
    setShowGallery(false); 
    let res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/${num}`);
    let data = await res.json();
    setImages(data.message);
    setShowGallery(true); 
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Calling All Canines!</h1>
        <h3>An Endless Feed of Dog Images</h3>
      </div>
      <Selector onButtonClick={fetchImages} />
      {showGallery && <Gallery images={images} />}
    </div>
  );
};

export default App;
