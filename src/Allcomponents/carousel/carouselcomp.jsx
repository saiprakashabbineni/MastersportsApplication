import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carouselcomp = () => {
  // Sample data for carousel items
  const carouselItems = [
    {
      id: 1,
      title: 'Slide 1',
      content: 'First slide content',
      imageUrl: `https://via.placeholder.com/800x400?text=Slide+1`,
    },
    {
      id: 2,
      title: 'Slide 2',
      content: 'Second slide content',
      imageUrl: `https://via.placeholder.com/800x400?text=Slide+2`,
    },
    {
      id: 3,
      title: 'Slide 3',
      content: 'Third slide content',
      imageUrl: `https://via.placeholder.com/800x400?text=Slide+3`,
    },
  ];

  useEffect(() => {
    // Initialize carousel when component mounts
    const carousel = new window.bootstrap.Carousel(document.getElementById('carouselExample'), {
      interval: 2000, // Adjust interval as needed
      wrap: true, // Allow continuous loop
    });

    // Optional: Pause on hover
    const carouselElement = document.getElementById('carouselExample');
    carouselElement.addEventListener('mouseenter', () => {
      carousel.pause();
    });

    carouselElement.addEventListener('mouseleave', () => {
      carousel.cycle();
    });

    // Clean up listeners when component unmounts
    return () => {
      carouselElement.removeEventListener('mouseenter', () => {
        carousel.pause();
      });
      carouselElement.removeEventListener('mouseleave', () => {
        carousel.cycle();
      });
    };
  }, []);

  return (
    <div>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={item.imageUrl} className="d-block w-100" alt={`Slide ${item.id}`} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.title}</h5>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carouselcomp;
