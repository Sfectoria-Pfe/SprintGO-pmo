import React from 'react'
import './footer.css'
import   {LiaFacebook, LiaLinkedin ,LiaInstagram,LiaTwitter} from "react-icons/lia"
import sprintGo from '../../assets/sprintgo.png'


const footer = () => {
  return (
    <footer className='relative'>
    <div class="custom-shape-divider-top-1709034146">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-20'>
        <div className='flex flex-col gap-5 '>
            <h2 className='test'>Footer</h2>
            <p className='test'>Lorem ipsum dolor sit amet, </p>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
            <div className="social-icons">
           <a href="facebook.com"> <LiaFacebook /><i  className="facebook"></i></a>
              <a href="https://twitter.com/"><LiaTwitter /><i className="fa fa-twitter"></i></a>
              <a href="https://www.instagram.com/"><LiaInstagram /><i className="fa fa-instagram"></i></a>
              <a href="linkedin.com"><LiaLinkedin /><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
    </div>
</div>
<div className="footer-bottom-left">
    <img src={sprintGo} alt="SprintGo"   onClick={() => window.scrollTo(0, 0)} />
    <p>&copy; 2024 SprintGo. All Rights Reserved.</p>
  </div>
</footer>
  )
}

export default footer