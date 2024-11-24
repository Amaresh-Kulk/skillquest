import React, { PureComponent } from 'react'
import '../style/Navbar.css';
import MiniLogo from '../images/SkillQuest.png';
import Home from '../images/home.png'; 
import AptitudeLogo from '../images/aptitude.png';
import CodingLogo from '../images/coding.png';
import PerformanceLogo from '../images/trophyLogo.jpg';
export default class Navbar extends PureComponent {
  render() {
    return (
      <div className='navbar'>
        <div className='left-nav'>
          <a href="Home.js">
          <img src={MiniLogo} alt='' />
          </a>
        </div>
        {/* <div className='mid-nav'>
          middle
        </div> */}
        
        <div className='right-nav'>
          <div className='home-icon'>
            <a href="Home.js">
            <img src={Home} alt="" />
            </a>
          <div className='tooltip'>Home</div>
          </div>
          <div className='aptitude-icon'>
            <a href="Aptitude.js">
            <img src={AptitudeLogo} alt="" />
            </a>
          <div className='tooltip'>Aptitude</div>
          </div>
          <div className='coding-icon'>
            <a href="Coding.js">
            <img src={CodingLogo} alt="" />
            </a>
          <div className='tooltip'>Coding</div>
          </div>
          <div className='performance-icon'>
            <a href="Performance.js">
            <img src={PerformanceLogo} alt="" className='performance' />
            </a>
          <div className='tooltip'>Performance</div>
          </div>
        </div>
      </div>
    )
  }
}
