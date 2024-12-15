import React, { useState, useEffect } from 'react'

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleImageLoad = () => {
      setLoading(false);
    };

    const imageElements = images.map((image) => {
      const img = new Image();
      img.src = image;
      img.onload = handleImageLoad;
      return img;
    });

    return () => {
      imageElements.forEach((img) => {
        img.onload = null;
      });
    };
  }, [images]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {loading ? (
        <p className="loadingMessage">Fetching your images... Good boy!</p>
      ) : (
        images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`dog-${index}`} 
            className="gallery-img" 
            onClick={() => handleImageClick(image)}
          />
        ))
      )}
      {selectedImage && (
        <div className="overlay" onClick={handleClose}>
          <div className="enlarged-image-container">
            <img src={selectedImage} alt="Enlarged dog" className="enlarged-image"/>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery