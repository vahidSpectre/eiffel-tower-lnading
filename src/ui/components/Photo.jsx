import React from 'react'

import classes from './Photo.module.css'
const Photo = ({src}) => {
  return (
    <div className={classes.wrapper}>
      <img src={src} alt="galery picture" />
    </div>
  )
}

export default Photo