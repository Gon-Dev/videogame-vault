import {useState,useEffect} from 'react';
import arrowRight from "../assets/arrow-right-material.svg";
import arrowLeft from "../assets/arrow-left-material.svg";
import "../stylesheets/Gallery.css"
function Gallery( {fetchedGame} ) {
  const [gallery,setGallery] = useState([]);
  async function fetchGallery(gameName) {
    try {
      const response = await fetch(`https://api.rawg.io/api/games/${gameName}/screenshots?key=c41ddde4984541a6aff7238cd9b5f310`);
      const data = await response.json();
      setGallery(data.results);
    } 
    catch (error){
      console.log(error);;
    }
  }

  function handleGalleryButton(event) {
    const sliderElement = document.querySelector(".game-gallery-slider");
    let actualPosition = sliderElement.scrollLeft;
    let elementWidth = sliderElement.clientWidth;
    event.currentTarget.className === "game-gallery-right-button"
      ? sliderElement.scrollTo(actualPosition+elementWidth,0)
      : sliderElement.scrollTo(actualPosition-elementWidth,0);
  }
  useEffect(()=>{ fetchedGame && fetchGallery(fetchedGame.slug) },[fetchedGame]);
  const galleryToShow = gallery ? gallery.map( screen => {
    return (
      <img src={screen.image} key={screen.id} className="game-screenshot"/>
    )
  }) : <></>;
  return (
    <section className="game-gallery-wrapper">
      <h6 className="game-subtitle">GALLERY</h6>
      <div className="game-gallery-slider">
        <button className="game-gallery-left-button" onClick={handleGalleryButton}>
          <img className="arrow-icon" src={arrowLeft} alt="arrow left icon" />
        </button>
        <>
          {galleryToShow}
        </>
        <button className="game-gallery-right-button" onClick={handleGalleryButton}>
          <img className="arrow-icon" src={arrowRight} alt="arrow right icon" />  
        </button>
      </div>
    </section>
  )
}
export default Gallery;