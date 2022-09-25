import { useState } from "react";
import "../stylesheets/Slider.css";
function Slider({ gallery } ) {
  const [currentIndex,setCurrentIndex] = useState(0);
  
  const images = gallery.map( image => <img className="slide" src={image.image} alt="game screenshot" key={image.id}/>  )
  
  function handleClick(event) {
    if(event.target.classList.contains("next")) {
      console.log("click next");
    }
    if (event.target.classList.contains("prev")) {
      console.log("click prev")
    }
  }

  return (
    <section aria-label="Game Screenshot Gallery" className="slider-wrapper">
      <button className="slider-button prev" onClick={handleClick}>&#8656;</button>
      {images}
      <button className="slider-button next" onClick={handleClick}>&#8658;</button>
    </section>
  )
}

export default Slider;