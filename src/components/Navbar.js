import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
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
          
          <Link to="/">
          <img src={MiniLogo} alt='' />
          </Link>
        </div>
        {/* <div className='mid-nav'>
          middle
        </div> */}
        
        <div className='right-nav'>
          <div className='home-icon'>
            <Link to="/">
            <img src={Home} alt="" />
            </Link>
          <div className='tooltip'>Home</div>
          </div>
          <div className='aptitude-icon'>
            <Link to="/Aptitude">
            <img src={AptitudeLogo} alt="" />
            </Link>
          <div className='tooltip'>Aptitude</div>
          </div>
          <div className='coding-icon'>
            <Link to="/Coding">
            <img src={CodingLogo} alt="" />
            </Link>
          <div className='tooltip'>Coding</div>
          </div>
          <div className='performance-icon'>
            <Link to="/Performance">
            <img src={PerformanceLogo} alt="" className='performance' />
            </Link>
          <div className='tooltip'>Performance</div>
          </div>
        </div>
      </div>
    )
  }
}
