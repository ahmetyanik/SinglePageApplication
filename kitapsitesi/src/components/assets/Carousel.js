import React from "react";

function Carousel({kitaplar}) {
  return (
    <div className="d-flex justify-content-center">
      <div
        style={{width:"70vw"}}
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={kitaplar[0].resimlinki} className="d-block" style={{height: "20vh"}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{kitaplar[0].kitapismi}</h5>
              <p>
                {kitaplar[0].yazar}
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={kitaplar[1].resimlinki} className="d-block " alt="..." style={{height: "20vh"}} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{kitaplar[1].kitapismi}</h5>
              <p>
              {kitaplar[1].yazar}
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={kitaplar[2].resimlinki} className="d-block " alt="..." style={{height: "20vh"}} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{kitaplar[2].kitapismi}</h5>
              <p>
              {kitaplar[2].yazar}
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
