import { useState } from "react";

import "../stylesheets/Slider.css";
function Slider({ gallery } ) {
  const [currentIndex,setCurrentIndex] = useState(0);
  const images = gallery.map( image => <img src={image.image} alt="game screenshot" className="slide"/>  )
  function handleClick(event) {
    if(event.target.classList.contains("next")) {
      images[currentIndex + 1] ? setCurrentIndex(prevIndex => prevIndex + 1) : setCurrentIndex(0);
    }
    if (event.target.classList.contains("prev")) {
      currentIndex > 0 ? setCurrentIndex(prevIndex => prevIndex - 1) : setCurrentIndex(images.length - 1);
    }
  }

  return (
    <section aria-label="Game Screenshot Gallery" className="slider-wrapper">
      <button className="slider-button prev" onClick={handleClick}>&#8656;</button>
      {images[currentIndex]}
      <button className="slider-button next" onClick={handleClick}>&#8658;</button>
    </section>
  )
}

export default Slider;