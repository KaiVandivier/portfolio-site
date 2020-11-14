import React from "react";

export function Carousel({ images }) {
  function getCarouselIndicators() {
    return images.map((src, idx) => (
      <li
        key={src}
        data-target="#imageCarousel"
        data-slide-to={idx}
        className={idx === 0 ? "active" : null}
      />
    ));
  }

  function getCarouselItems() {
    return images.map((src, idx) => (
      <div key={src} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
        <img
          className="d-block w-100"
          src={src}
          // TODO: Include 'alt' message in projectData
          alt={`Screenshot ${idx}`}
        />
      </div>
    ));
  }

  return (
    <div id="imageCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        {getCarouselIndicators()}
      </ol>
      <div class="carousel-inner">
        {getCarouselItems()}
      </div>
      <a
        class="carousel-control-prev"
        href="#imageCarousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#imageCarousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
