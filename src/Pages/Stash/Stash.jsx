import React from 'react'
import { useEffect } from "react";
import './Stash.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import storage from "../../assets/storage.png"

const Stash = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <div className="stash">
      <div className="clump" data-aos="fade-right">
        <h1 className = "context">Like any other college student, I'm a big self-storage user. </h1>
        <img src="https://live.staticflickr.com/65535/53103360370_7b069f236d_o.png" alt="" />
      </div>
      
    </div>
  )
}

export default Stash