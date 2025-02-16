// Import React and necessary components and styles
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/homepage.css'; // Import homepage-specific CSS
import '../assets/css/stylesheet.css'; // Import general stylesheet
import VideoPopup from '../components/VideoPopup'; // Import VideoPopup component
import VideoPlayingHero from '../components/VideoPlayingHero'; // Import VideoPlayingHero component
import VideoPauseHero from '../components/VideoPauseHero'; // Import VideoPauseHero component

// Import images for various sections
import abtImg1 from '../assets/images/home-abt-1.png';
import abtImg2 from '../assets/images/home-abt-2.png';
import abtImg3 from '../assets/images/home-abt-3.png';
import academicOfferingsImg1 from '../assets/images/academic-offerings-1.png';
import academicOfferingsImg2 from '../assets/images/academic-offerings-2.png';
import mrImg1 from '../assets/images/mr-1.png';
import mrImg2 from '../assets/images/mr-2.png';
import mrImg3 from '../assets/images/mr-3.png';
import eventImg1 from '../assets/images/event-card-1.png';
import eventImg2 from '../assets/images/event-card-2.png';
import eventImg3 from '../assets/images/event-card-3.png';

const Home = () => {
 
  return (
    <div className="home">
      
      <VideoPopup /> 
      {/* Render the VideoPopup component */}
      
      <VideoPlayingHero /> 
      {/* Render the VideoPlayingHero component */}

      <VideoPauseHero /> 
      {/* Render the VideoPauseHero component */}

      {/* About Section */}
      <section className='abtSec padSec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='globalHeadingWrap'>
                <h2 className='globalHeading'>About</h2>
                <p>Experience the fusion of culture and education at the Center for South Asian Music at Habib University. Our Music Room provides immersive learning opportunities, complemented by courses that culminate in the pioneering South Asian Music Minor. Dive into the historical, mathematical, and performance dimensions, as we strive to revive cultural heritage and nurture interdisciplinary understanding.</p>
                <Link className='globalBtn borderBtn' to="/about">Explore</Link>
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
      
      {/* Academic Offerings Section */}
      <section className='AcaOffSec padSec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='globalHeadingWrap'>
                <h2 className='globalHeading'>Academic Offerings</h2>
                <p>Embark on a journey of musical exploration and academic inquiry with our diverse array of courses. From diving into the intricacies of South Asian musical genres to exploring the musical landscape elsewhere, our courses blend theory with practice to offer immersive learning experiences. Led by esteemed instructors and rooted in interdisciplinary approaches, our courses aim to cultivate a profound understanding and appreciation of music's cultural and historical significance.</p>
                <Link className='globalBtn borderBtn' to="/academic-offerings">Explore</Link>
              </div>
            </div>
          </div>
          <ul className='abtImagesWrap'>
            <li><img src={academicOfferingsImg1} alt="Musical exploration course" /></li>
            <li><img src={academicOfferingsImg2} alt="Interdisciplinary musical study" /></li>
          </ul>
        </div>
      </section>

      {/* Khawaja Mashooqullah Music Room Section */}
      <section className='mrSec padSec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='globalHeadingWrap'>
                <h2 className='globalHeading'>Khawaja Mashooqullah Music Room</h2>
                <Link className='globalBtn borderBtn' to="/music-room">Explore</Link>
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

      {/* Events Section */}
      <section className='eventSec padSec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='globalHeadingWrap'>
                <h2 className='globalHeading'>Events</h2>
                <p>Take a glimpse into our annual events, ranging from soulful Khayal concerts to the melodies of Ghazal Kay Rang and captivating folk music programs. As a highlight, our Music Room orchestra culminates the academic year by serenading the graduating batch at their awards nights, creating moments of celebration and appreciation.</p>
                <Link className='globalBtn borderBtn' to="/events">Explore</Link>
              </div>
            </div>
          </div>
          <ul className='abtImagesWrap'>
            <li className='hoverImgBox'>
              <div className='InnerWraperImg'>
                <div className="imgWrap">
                  <img src={eventImg1} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Week of Welcome: Musical Evening</h3>
                  <h4>DATE: 12/3/2024</h4>
                </div>
              </div>
            </li>
            <li className='hoverImgBox'>
              <div className='InnerWraperImg'>
                <div className="imgWrap">
                  <img src={eventImg2} alt="Ghazal Kay Rang event" />
                </div>
                <div className="overImgText">
                  <h3>Week of Welcome: Musical Evening</h3>
                  <h4>DATE: 12/3/2024</h4>
                </div>
              </div>
            </li>
            <li className='hoverImgBox'>
              <div className='InnerWraperImg'>
                <div className="imgWrap">
                  <img src={eventImg3} alt="Folk music program" />
                </div>
                <div className="overImgText">
                  <h3>Week of Welcome: Musical Evening</h3>
                  <h4>DATE: 12/3/2024</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      
    </div>
  );
};

export default Home;

