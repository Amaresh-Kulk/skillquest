import React, { Component } from 'react'
import '../style/Footer.css';
import GitHubLogo from '../images/gitHubLogo.jpg';
import LinkedInLogo from '../images/linkedInLogo.jpg';
import TwitterLogo from '../images/twitterLogo.jpg';
export default class Footer extends Component {
  render() {
    return (
      <>
        <div className='main-footer'>
          <div className='summary'>
            <h3>SkillQuest</h3>
            <p>Your one-stop platform for complete interview preparation</p>
            <div className='images'>
              <img src={GitHubLogo} alt="" />
              <img src={LinkedInLogo} alt="" />
              <img src={TwitterLogo} alt="" />
            </div>
          </div>
          <div className='footer-2'>
            <div className='so-much'>
              <h4>Resources</h4>
              <p>Documentation</p>
              <p>Practice Tests</p>
              <p>Interview Tips</p>
              <p>Study Material</p>
            </div>
            <div className='so-much'>
              <h4>Company</h4>
              <p>About Us</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>Press</p>
            </div>
            <div className='so-much'>
              <h4>Legal</h4>
              <p>Privacy Policy</p>
              <p>Terms Of Service</p>
              <p>Cookie Privacy</p>
            </div>
          </div>
        </div>
          <div className='footer-last'>
            <p>&#xA9; 2024 SkillQuest. All rights reserved.</p>
          </div>
      </>
    )
  }
}
