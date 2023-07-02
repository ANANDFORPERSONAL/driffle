import React, { useState, useEffect } from 'react';
import svgImage from './img1.svg';
import svgImage2 from './img2.svg';
import svgImage3 from './img3.svg';
import svgImage4 from './img4.svg';
import svgImage5 from './img5.svg';
import svgImage6 from './img6.svg';
import svgImage7 from './img7.svg';


const MovingElement = () => {
  const [angle, setAngle] = useState(0);
  const radius1 = 472;
  const radius2 = 343;
  const radius3 = 232;
  const angleStep = 0.004;
  const angleOffset = Math.PI;
  const angleOffset1 = Math.PI/2;
  const angleOffset2 = Math.PI/1; 
  const angleOffset3 = Math.PI/9;
  const angleOffset4 = Math.PI/5;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAngle(prevAngle => prevAngle - angleStep);
    }, 16.7);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const x = Math.cos(angle) * radius1;
  const y = Math.sin(angle) * radius1;

  const x2 = Math.cos(angle + angleOffset) * radius1;
  const y2 = Math.sin(angle + angleOffset) * radius1;

  const x3 = Math.cos(angle + angleOffset1) * radius1;
  const y3 = Math.sin(angle + angleOffset1) * radius1;

  const x4 = Math.cos(angle + angleOffset2) * radius2;
  const y4 = Math.sin(angle + angleOffset2) * radius2;

  const x5 = Math.cos(angle + angleOffset3) * radius3;
  const y5 = Math.sin(angle + angleOffset3) * radius3;

  const x6 = Math.cos(angle + angleOffset4) * radius2;
  const y6 = Math.sin(angle + angleOffset4) * radius2;

  const imageStyle = {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)',
    transform: `translate(${x}px, ${y}px)`,
    width: '40px',
    height: '40px',
    
  };
  
  const imageStyle2 = {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)',
    transform: `translate(${x2}px, ${y2}px)`,
    width: '40px',
    height: '40px',
  };
  
  const imageStyle3 = {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)',
    transform: `translate(${x3}px, ${y3}px)`,
    width: '40px',
    height: '40px',
  };
  
  const imageStyle4 = {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)',
    transform: `translate(${x4}px, ${y4}px)`,
    width: '40px',
    height: '40px',
  };
  
  const imageStyle5 = {
    position: 'absolute',
    top: 'calc(50% - 16.5px)',
    left: 'calc(50% - 16.5px)',
    transform: `translate(${x5}px, ${y5}px)`,
    width: '33px',
    height: '33px',
  };
  const imageStyle6 = {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)',
    transform: `translate(${x6}px, ${y6}px)`,
    width: '40px',
    height: '40px',
  };
  
  

  return (
    <div style={{ position: 'absolute', maxWidth: '944px', height: '944px', margin: '0 auto', left:'720px' }}>
      <img src={svgImage} alt="Moving Element" style={imageStyle} />
      <img src={svgImage2} alt="Moving Element" style={imageStyle2} />
      <img src={svgImage3} alt="Moving Element" style={imageStyle3} />
      <img src={svgImage4} alt="Moving Element" style={imageStyle4} />
      <img src={svgImage7} alt="Moving Element" style={imageStyle6} />
      <img src={svgImage6} alt="Moving Element" style={imageStyle6} />

      <img src={svgImage5} alt="Moving Element" style={imageStyle5} />
    </div>
  );
};

export default MovingElement;
