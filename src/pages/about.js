import React from 'react';

import '../assets/css/stylesheet.css';

// Import images
import abtImg1 from '../assets/images/home-abt-1.png';
import abtImg2 from '../assets/images/home-abt-2.png';
import abtImg3 from '../assets/images/home-abt-3.png';

const About = () => {
  return (
    <>
    <span className='innerPageBlock'></span>
      <section className='abtSec padSec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='globalHeadingWrap'>
                <h2 className='globalHeading'>About</h2>
                <p>Experience the fusion of culture and education at the Center for South Asian Music at Habib University. Our Music Room provides immersive learning opportunities, complemented by courses that culminate in the pioneering South Asian Music Minor. Dive into the historical, mathematical, and performance dimensions, as we strive to revive cultural heritage and nurture interdisciplinary understanding.</p>
              </div>
            </div>
          </div>
          <ul className='abtImagesWrap'>
            <li><img src={abtImg1} alt="Cultural fusion at Habib University" /></li>
            <li><img src={abtImg2} alt="Immersive learning opportunities" /></li>
            <li><img src={abtImg3} alt="South Asian Music Minor" /></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
