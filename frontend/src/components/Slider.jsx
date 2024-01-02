import React, { useState, useEffect } from 'react'
import '../styles/Slider.scss'

function Slider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.pictures.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.pictures.length - 1 : prevIndex - 1
    )
  }

  // chargement des images pour éviter le flash blanc
  useEffect(() => {
    data.pictures.forEach((picture) => {
      const img = new Image()
      img.src = picture
    })
  })

  return (
    <div className="slider">
      <div className="swiper-left" onClick={handlePrevious}></div>
      <div className="swiper-right" onClick={handleNext}></div>
      <div className="index">
        {currentIndex + 1}/{data.pictures.length}
      </div>
      <img
        className="slider-img"
        src={data.pictures[currentIndex]}
        alt={data.title}
      />
    </div>
  )
}

export default Slider
