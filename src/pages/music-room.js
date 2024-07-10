import React from 'react';
import '../assets/css/stylesheet.css';

// Import images
import mrImg1 from '../assets/images/mr-1.png';
import mrImg2 from '../assets/images/mr-2.png';
import mrImg3 from '../assets/images/mr-3.png';

const MusicRoom = () => {
  return (
    <>
      <section className='mrSec padSec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='globalHeadingWrap'>
                <h2 className='globalHeading'>Khawaja Mashooqullah Music Room</h2>
              </div>
            </div>
          </div>
          <ul className='abtImagesWrap'>
            <li><img src={mrImg1} alt="Music Room interior" /></li>
            <li><img src={mrImg2} alt="Music Room instruments" /></li>
            <li><img src={mrImg3} alt="Music Room practice session" /></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default MusicRoom;
