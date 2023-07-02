import React from 'react';
import './circle.css';
import image1 from './circle1.png';
import image2 from './circle2.png';
import image3 from './circle3.png';
import image4 from './bcg.png';

const Circle = () => {
  const circleStyle1 = {
    position: 'absolute',
    maxWidth: '464px',
    height: '464px',
    top: '240px',
    left: '475px',
  };

  const circleStyle2 = {
    position: 'absolute',
    maxWidth: '686px',
    height: '686px',
    top: '125px',
    left: '365px',
  };

  const circleStyle3 = {
    position: 'absolute',
    maxWidth: '944px',
    height: '944px',
    top: '-4px',
    left: '242px',
  };
  const backgroundStyle = {
    position: 'absolute',
    maxWidth: '944px',
    height: '954px',
    top: '-14px',
    left: '242px',
    background: 'linear-gradient(109.55deg, rgba(33, 83, 211, 0.1) 13.73%, rgba(39, 103, 123, 0.1) 85.66%)',
    borderRadius: '50%',

  };



  return(
    <div className='circle' style={{ position: 'absolute', width: '944px', height: '944px', margin: '0 auto', maxWidth:'944px' }}>

      <img src={image1} alt="" style={circleStyle1} />
      <img src={image2} alt="" style={circleStyle2} />
      <img src={image3} alt="" style={circleStyle3} />
      <img src={image4} alt="" style={backgroundStyle} />

    </div>
  );
};

export default Circle;
