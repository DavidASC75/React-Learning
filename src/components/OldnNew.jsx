import React, { Component, useState } from 'react';
import '../components/OldnNew.css';


//Work in progress

const OldnNew = (props) => {
  const [color, setColor] = useState('brown');
  const [value, setValue] = useState(0);
  const [colors, setColors] = useState(['brown', 'orange']);
  const [colorBool, setColorBool] = useState(false);

  const handleClrSwap = () => {
    setTimeout(() => {
      
      if (colors[0] === 'brown') {
        setColorBool(true);
      } else {
        setColorBool(false);
      }
    }, 2000);
  };

  console.log(colorBool);

  return (
    <>
      <h1 style={{ color: colorBool ? colors[1] : colors[0] }}>{value}</h1>
      <button className='button' onClick={handleClrSwap}>
        Color swap
      </button>
    </>
  );
};

export default OldnNew;
