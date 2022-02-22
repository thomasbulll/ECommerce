import React from 'react'
import './Footer.css'
import ScrollToTop from './ScrollToTop';

function Footer() {
    
    return (
     <div className="footer-container">
        <div className="main-footer">

            <div className="footer-heading footer1">
            <h2>About Us</h2>
            <a href="/about">Blog</a>
            <a href="">Investors</a>
            <a href="">Customers</a>
            <a href="">Terms Of Service</a>
            </div>

            <div className="footer-heading footer2">
            <h2>Contact Us</h2>
            <a href="">Support</a>
            <a href="">Contact Us</a>
            <a href="">Sponsorships</a>
            <a href="">Jobs</a>
            </div>


            <div className="footer-heading footer3">
            <h2>Social Media</h2>
            <a href="">YouTube</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">Snapchat</a>
            </div>
            <div className="footer-email-form">
                <h2>Join Our News Letter</h2>
                <input type="email" id="footer-email" placeholder="Enter your email address"/>
                <input type ="submit" value="Sign Up" id="footer-email-button"/>

            </div>


        </div>
        </div>
      
    )
}

export default Footer
