import React from 'react';
import '../assets/css/stylesheet.css';

// Import images
import academicOfferingsImg1 from '../assets/images/academic-offerings-1.png';
import academicOfferingsImg2 from '../assets/images/academic-offerings-2.png';

const AcademicOfferings = () => {
  return (
    <>
      <section className='AcaOffSec padSec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='globalHeadingWrap'>
                <h2 className='globalHeading'>Academic Offerings</h2>
                <p>Embark on a journey of musical exploration and academic inquiry with our diverse array of courses. From diving into the intricacies of South Asian musical genres to exploring the musical landscape elsewhere, our courses blend theory with practice to offer immersive learning experiences. Led by esteemed instructors and rooted in interdisciplinary approaches, our courses aim to cultivate a profound understanding and appreciation of music's cultural and historical significance.</p>
              </div>
            </div>
          </div>
          <ul className='abtImagesWrap'>
            <li><img src={academicOfferingsImg1} alt="Musical exploration course" /></li>
            <li><img src={academicOfferingsImg2} alt="Interdisciplinary musical study" /></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AcademicOfferings;
