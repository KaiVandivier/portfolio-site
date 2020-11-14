import React from "react";

// TODO: Include 'alt' message in projectData
// TODO: Open images in lightroom

export function Carousel({ images }) {
  function getCarouselIndicators() {
    return images.map((src, idx) => (
      <li
        key={src}
        data-target="#imageCarousel"
        data-slide-to={idx}
        className={idx === 0 ? "active" : null}
        style={{ backgroundColor: "#666" }}
      />
    ));
  }

  function getCarouselItems() {
    return images.map((src, idx) => (
      <div key={src} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
        <a href={src}>
          <img className="d-block w-100" src={src} alt={`Screenshot ${idx}`} />
        </a>
      </div>
    ));
  }

  return (
    <div
      id="imageCarousel"
      className="carousel slide shadow mb-4"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">{getCarouselIndicators()}</ol>
      <div className="carousel-inner">{getCarouselItems()}</div>
      <a
        className="carousel-control-prev"
        href="#imageCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#imageCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <style jsx>
        {`
          .carousel-control-next,
          .carousel-control-prev {
            transition: background 0.15s ease-in-out;
          }

          .carousel:hover .carousel-control-next,
          .carousel:hover .carousel-control-prev {
            background-color: rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </div>
  );
}

export default Carousel;
