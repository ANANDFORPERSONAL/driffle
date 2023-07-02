import React from 'react';
import MovingElement from '../src/component/rotatingElements/movingElements';
import NavBar from '../src/component/navBar/navBar';
import Heading from '../src/component/heading/heading';
import Circle from '../src/component/circle/circle';

import './styles.css';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Circle />
      <MovingElement />
      <Heading />
    
    </div>
  );
};

export default App;
