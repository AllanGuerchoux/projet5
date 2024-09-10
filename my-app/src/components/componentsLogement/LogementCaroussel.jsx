import React, {useState} from 'react';

const LogementCaroussel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? pictures.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  };

  const nextImage =() => {
    const isLastImage = currentIndex === pictures.length -1;
    const newIndex = isLastImage? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

return(
  <div id='carrousel' >
    <img id='carrouselImg' src={pictures[currentIndex]} alt={`Slide${currentIndex + 1}`} />
    <button id='carrouselPrevImg' onClick={previousImage}></button>
    <button id='carrouselNextImg' onClick={nextImage}></button>
  </div>
)

}

export default LogementCaroussel;