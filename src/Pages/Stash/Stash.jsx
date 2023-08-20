import React from 'react'
import { useEffect } from "react";
import './Stash.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import stash1 from "../../assets/stash-1.png"
import stash2 from "../../assets/stash-2.png"
import stash3 from "../../assets/stash-3.png"
import stash4 from "../../assets/stash-4.png"
import stash5 from "../../assets/stash-5.png"


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

      <div className="clump" data-aos="fade-up">
        <h1 className = "context">It's <span className="bold">recession-proof </span> with <span className="bold">$40 billion</span> in annual revenue...</h1>
      </div>

      <div className="clump" data-aos="fade-up">
        <h1 className = "context">and Mom-and-Pop businesses make up almost <span className="bold big">70%</span> of the <span className="bold">highly-fragmented </span>industry.</h1>
      </div>

      <div className="clump" data-aos="fade-up">
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
          <br />
          <h2>+ more</h2>
        </ul>
        <br />
        <h1 className="context">and heard the following things...</h1>
      </div>

      <div className="clump">
        <h2 className="context" data-aos="fade-down-right"> <em>"We keep track of all our expenses <span className="bold big2">on paper</span>."</em></h2>
        <br />
        <br />
        <br />
        <h2 className="context" data-aos="fade-down-left"> <em>"SiteLink, the software we currently use, is <span className="bold big2">too difficult</span> and targets storage businesses <span className="bold big2">20x our size."</span></em></h2>
        <br />
        <br />
        <br />
        <h2 className="context" data-aos="fade-down-right"> <em>"When people don't pay, we need to <span className="bold big2">manually cross-check</span> payments with our records."</em></h2>
        <br />
        <br />
        <br />
        <h2 className="context" data-aos="fade-down-left"> <em>"We use QuickBooks for our payments but have to manage the units <span className="bold big2">separately</span>. It's a <span className="big2 bold">huge pain.</span>"</em></h2>
        <br />
        <br />
        <br />
      </div>


      <div className="clump" data-aos="zoom-out-down">
        <h1 className="context">Introducing <span className="big bold">Stash!</span></h1>
        <br />
        <br />
        <h1 className="context">An <span className="big2 bold">all-in-one management</span> platform for self-storage owners.</h1>

        <img src={stash1} alt="" />
      </div>


      <div className="clump">
        <img src={stash2} alt="" />
      </div>

      <div className="clump">
        <img src={stash3} alt="" />
      </div>


      <div className="clump">
        <h2 className = "context">A quick competitive analysis:</h2>
        <img src={stash4} alt="" />
      </div>

      <div className="clump">
        <img src={stash5} alt="" />
      </div>

      <div className="clump">
        <h1>Currently building the platform in React...</h1>
        <br />
        <h2>Look out for a launch!</h2>
      </div>
      
    </div>
    
    
  )
}

export default Stash