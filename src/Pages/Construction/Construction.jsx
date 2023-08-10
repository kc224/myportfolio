import React from 'react'
import './Construction.scss'
import construction from '../../assets/construction.jpg'

const Construction = () => {
  return (
    <div className="construct">
      <div className="status">This page is currently under construction!</div>
      <img src={construction} alt="" />
    </div>
  )
}

export default Construction