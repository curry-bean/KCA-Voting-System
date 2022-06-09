import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = ({size=100}) => {
  return <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:"100%",
      height:"100%"
  }}>
      <Spinner style={{
          size:size,
      }} animation='border' color='#ff0' />
  </div>;
};

export default Loading;
