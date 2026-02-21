import React from "react";
import SectionCTA from "./SectionCTA";

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Galeria</h2>

      <div className="gallery-grid">
        <div className="gallery-item">
        <iframe
            src="https://www.instagram.com/reel/DUs15QvCThR/embed"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            title="Post 1"
          ></iframe>
        </div>
        <div className="gallery-item">
          <iframe
              src="https://www.instagram.com/reel/DPd8LavFd9g/embed"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              title="Post 2"
            ></iframe>
        </div>
        <div className="gallery-item">
          <iframe
              src="https://www.instagram.com/p/DMS5m0xNeOr/embed"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              title="Post 3"
            ></iframe>
        </div>
        <div className="gallery-item">
        <iframe
              src="https://www.instagram.com/p/DOGZQYGjhNT/embed"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              title="Post 4"
            ></iframe>
        </div>
      </div>
      <SectionCTA />
    </section>
  );
};

export default Gallery;