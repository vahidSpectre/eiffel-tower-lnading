import React from 'react'

import classes from './UnderlinedText.module.css'
const UnderlinkedText = ({text}) => {
  return (
    <div className={classes.text}>{text}</div>
  )
}

export default UnderlinkedText