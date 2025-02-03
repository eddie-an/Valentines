import React from "react";

function Carousel () {
    return (
        <section className='slider-container'>
        <div className='slider-wrapper'>
          <div className='slider'>
            <img id="slide-1" src="/images/IMG_3219.JPG" alt="."/>
            <img id="slide-2" src="/images/IMG_8054.jpeg" alt="."/>
            <img id="slide-3" src="/images/IMG_2940.JPG" alt="."/>
            <img id="slide-4" src="/images/IMG_2470.JPG" alt="."/>
            <img id="slide-5" src="/images/IMG_7559.jpeg" alt="."/>
            <img id="slide-6" src="/images/IMG_3559.JPG" alt="."/>
            <img id="slide-7" src="/images/IMG_8803.JPG" alt="."/>
            <img id="slide-8" src="/images/IMG_9944.JPG" alt="."/>
            <img id="slide-9" src="/images/IMG_3550.JPG" alt="."/>
          </div>
          <div className='slider-nav'>
            <a href='#slide-1' aria-label="Close"/>
            <a href='#slide-2' aria-label="Close"/>
            <a href='#slide-3' aria-label="Close"/>
            <a href='#slide-4' aria-label="Close"/>
            <a href='#slide-5' aria-label="Close"/>
            <a href='#slide-6' aria-label="Close"/>
            <a href='#slide-7' aria-label="Close"/>
            <a href='#slide-8' aria-label="Close"/>
            <a href='#slide-9' aria-label="Close"/>
          </div>
        </div>
      </section>
    );
}

export default Carousel;