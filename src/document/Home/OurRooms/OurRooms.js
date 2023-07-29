import React, { useState, useEffect } from 'react';
import './OurRooms.css';
import Room1 from '../OurRooms/Deluxe.jpeg';
import Room2 from './Super_Deluxe.jpg';
import Room3 from './Deluxe_Lake_Facing.avif';
import { Zoom, Slide } from 'react-reveal';

export default function Ourroom() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleImageClose = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleImageClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="ourrooms">
      <Slide bottom>
        <div className="head1">
          <h3 className="h3class">OUR ROOMS</h3>
        </div>
      </Slide>
      <div className="body1">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col1">
            <Zoom>
              <div className="card">
                <img
                  src={Room1}
                  className="card-img-top"
                  alt="Deluxe Room"
                  onClick={() => handleImageClick(Room1)}
                />
                <div className="card-body">
                  <Slide bottom delay={300}>
                    <h5 className="card-title">DELUXE ROOM</h5>
                  </Slide>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="col2">
            <Zoom>
              <div className="card">
                <img
                  src={Room2}
                  className="card-img-top"
                  alt="Super Deluxe Room"
                  onClick={() => handleImageClick(Room2)}
                />
                <div className="card-body">
                  <Slide bottom delay={300}>
                    <h5 className="card-title">SUPER DELUXE ROOM</h5>
                  </Slide>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="col4">
            <Zoom>
              <div className="card">
                <img
                  src={Room3}
                  className="card-img-top"
                  alt="Lake Facing Room"
                  onClick={() => handleImageClick(Room3)}
                />
                <div className="card-body">
                  <Slide bottom delay={300}>
                    <h5 className="card-title">LAKE FACING ROOM</h5>
                  </Slide>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="modal-overlay" onClick={handleImageClose}>
          <Zoom>
            <div className="modal">
              <span className="close" onClick={handleImageClose}>
                &times;
              </span>
              <img src={selectedImage} className="modal-image" alt="" onClick={handleImageClose} />
            </div>
          </Zoom>
        </div>
      )}
    </div>
  );
}