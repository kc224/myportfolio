import React from 'react'
import { useEffect } from "react";
import './Stash.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Stash = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <div className="stash">
      <div className="clump" data-aos="fade-right">
        <h1 className = "context"> The self-storage industry is <span className="bold big">outdated.</span></h1>
        <br />
        <p>Keep scrolling...</p>
      </div>

      <div className="clump" data-aos="fade-right">
        <h2 className = "context">Self-storage is...</h2>
        <br />
        <h1 className = "context">a <span className="bold">recession-proof </span>industry with <span className="bold">$40 billion</span> in annual revenue...</h1>
      </div>

      <div className="clump" data-aos="fade-right">
        <h1 className = "context">and Mom-and-Pop businesses make up almost <span className="bold big">70%</span> of the <span className="bold">highly-fragmented </span>industry.</h1>
      </div>

      <div className="clump" data-aos="fade-right">
        <h1 className="context">I talked to over <span className="bold">14</span> self-storage owners across the United States:</h1>
        <br />
        <ul className = "list">
          <li><h2>Delsea Drive Self-Storage</h2></li>
          <li><h2>Otter Self-Storage</h2></li>
          <li><h2>Riverdale Self-Storage</h2></li>
          <li><h2>Monarch Self-Storage</h2></li>
          <li><h2>Carolina Mini-Storage</h2></li>
          <li><h2>Deforest Self-Storage</h2></li>
          <li><h2>Eagle Guard Self-Storage</h2></li>
          <li><h2>KDR Self-Storage</h2></li>
          <li><h2>Pearmand Daily Self-Storage</h2></li>
          <li><h2>Storage Rentals of America</h2></li>
          <li><h2>Cresco Storage</h2></li>
          <li><h2>Storage Rentals of America</h2></li>
          <li><h2>Jeannie's Rentals</h2></li>
          <li><h2>Isleta Self-Storage</h2></li>
        </ul>
        <br />
        <h2>+ more</h2>
      </div>

      
    </div>
  )
}

export default Stash