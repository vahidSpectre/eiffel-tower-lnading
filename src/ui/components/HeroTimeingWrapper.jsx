import React from 'react'

import classes from './HeroTImeingWrapper.module.css'
const HeroTimeingWrapper = ({children,className}) => {
  return (
    <div className={`${classes.wrapper} ${className}`}>{children}</div>
  )
}

export default HeroTimeingWrapper