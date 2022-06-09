import React from 'react';
import classes from './ui.module.css'
import { FcFlashAuto} from 'react-icons/fc'
const UICARD = ({children}) => {


  return <div className={classes.card}>
    <div  className={classes.header}>
      <span><FcFlashAuto style={{
        fontSize:"35px"
      }} /> Flash Sales</span>
      <span>Time Left:<strong>11h:50m:45s</strong> </span>
    </div>
      {children }
    </div>;
};

export default UICARD;
