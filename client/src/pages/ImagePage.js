import React, { useState, useEffect } from "react";
import imageAPI from '../utils/imagesAPI';
import { Image, Container, Row, Col } from "react-bootstrap";

function ImagePage() {
  const [gameImage, setGameImage] = useState([]);

  useEffect(() => {
    async function fetchImage() {
        let { data } = await imageAPI.getImage("5f42c68addc7798fc2321061");
        console.log('Image', data)
        // data = data.filter((gameImage) => (gameImage.alt === gamePage.game));
        console.log('New Image', data.image);
        setGameImage(data);
      };
      fetchImage();
    
    
  }, []);

  return(
    <div>
      <Image src={gameImage.image} alt={gameImage.alt}/>
    </div>
  )

}

export default ImagePage;