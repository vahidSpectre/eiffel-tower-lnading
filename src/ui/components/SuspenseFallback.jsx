import React from 'react'

import classes from './SuspenseFallback.module.css'
const SuspenseFallback = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content_container}>
        <div className={classes.loader}></div>
      </div>
    </div>
  );
}

export default SuspenseFallback