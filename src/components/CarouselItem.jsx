const CarouselItem = ( {slide} ) => {
  return (
    <div className="carousel-item">
      <img className="carousel-image" src={slide} alt="screenshot" />
    </div>
  )
}

export default CarouselItem;