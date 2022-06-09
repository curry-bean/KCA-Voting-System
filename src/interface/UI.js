import React from 'react';
import classes from './ui.module.css'
const UI = ({children}) => {


  return <div className={classes.card}>
    <div  className={classes.header2}>
      <span>Fast Delivery Within Nairobi</span>
    </div>
      {children }
  </div>;
};

export default UI;