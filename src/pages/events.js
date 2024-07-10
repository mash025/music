import React from 'react';
import '../assets/css/stylesheet.css';

// Import images
import eventImg1 from '../assets/images/event-card-1.png';
import eventImg2 from '../assets/images/event-card-2.png';
import eventImg3 from '../assets/images/event-card-3.png';

const Events = () => {
  return (
    <>
      
      <section className='eventSec padSec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='globalHeadingWrap'>
                <h2 className='globalHeading'>Events</h2>
                <p>Take a glimpse into our annual events, ranging from soulful Khayal concerts to the melodies of Ghazal Kay Rang and captivating folk music programs. As a highlight, our Music Room orchestra culminates the academic year by serenading the graduating batch at their awards nights, creating moments of celebration and appreciation.</p>
              </div>
            </div>
          </div>
          <ul className='abtImagesWrap'>
            <li><img src={eventImg1} alt="Khayal concert event" /></li>
            <li><img src={eventImg2} alt="Ghazal Kay Rang event" /></li>
            <li><img src={eventImg3} alt="Folk music program" /></li>
          </ul>
        </div>
      </section>


    </>
  );
};

export default Events;
