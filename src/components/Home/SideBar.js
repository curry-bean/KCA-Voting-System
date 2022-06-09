import React from 'react';
import classes from './home.module.css'
import { Form, Button } from 'react-bootstrap'

const SideBar = () => {
  return <div className={classes.filters}>
      <span className={classes.title}>HOME OF GOODIES</span>
      <span className={classes.title1}>Filter Products</span>
      <span>
        <Form.Check 

        inline
        label="Ascending"
        name="group1"
        type="radio"
        id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check 

        inline
        label="Descending"
        name="group1"
        type="radio"
        id={`inline-1`}
        />
      </span>

      <Button variant='warning' style={{
        paddingTop:"10px",
        padding:'10px'
      }}>Clear Filters</Button>
  </div>;
};

export default SideBar;
