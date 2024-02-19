import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

import classes from './Events.module.css'
const Events = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Footer />
    </div>
  );
}

export default Events