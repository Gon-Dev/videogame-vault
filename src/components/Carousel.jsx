import { useEffect } from "react";
import { useState } from "react";
import CarouselItem from "./CarouselItem.jsx";
import arrowRight from "../assets/menu-right.svg"
import arrowLeft from "../assets/menu-left.svg"
import "../stylesheets/Carousel.css";

export default function Carousel( {fetchedGame} ) {

  const [gallery,setGallery] = useState([]);
  const [currentSlide,setCurrentSlide] = useState(0);

  async function fetchGallery(gameName) {
    const response = await fetch(`https://api.rawg.io/api/games/${gameName}/screenshots?key=c41ddde4984541a6aff7238cd9b5f310`);
    const data = await response.json();
    const images = data.results.map( item => item.image);
    try {
      setGallery(images);
    } 
    catch (error){
      return null;
    }
  }
  
  useEffect(()=>{ fetchedGame && fetchGallery(fetchedGame.slug) },[fetchedGame]);
  const handleClick = (event) => {
    console.log(event.target);
    event.target.classList.contains("next") && setCurrentSlide(currentSlide => currentSlide < gallery.length - 1 ? currentSlide + 1 : 0);
    event.target.classList.contains("prev") && setCurrentSlide(currentSlide => currentSlide !== 0 ? currentSlide - 1 : gallery.length - 1);
  }

  return (
    <div className="carousel">
      <h6 className="game-subtitle">GALLERY</h6>
      <div 
        className="carousel-inner"
        style={{transform: `translateX(${-currentSlide * 100}%)`}}
      >
      {gallery.map((slide,index) => (
        <CarouselItem slide={slide} key={index} />
      ))}
      </div>
      <button className="carousel-button prev" onClick={event=> handleClick(event)}>
        <img className="carousel-button-icon prev" src={arrowLeft} alt="positioning arrow" />
      </button>
      <button className="carousel-button next" onClick={event=> handleClick(event)}>
        <img className="carousel-button-icon next" src={arrowRight} alt="positioning arrow" />
      </button>
    </div>
  )
}