import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import MiniLogo from '../images/SkillQuest.png';
export default class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <div className="left-nav">
          <Link to="/">
            <img src={MiniLogo} alt="SkillQuest Logo" />
          </Link>
        </div>

        <div className="right-nav">
          <div className="home-icon">
            <Link to="/">
            <i class="fas fa-house-chimney"></i>
            </Link>
            <div className="tooltip">Home</div>
          </div>
          <div className="aptitude-icon">
            <Link to="/Aptitude">
              <i className="fas fa-pen-to-square"></i>
            </Link>
            <div className="tooltip">Aptitude</div>
          </div>
          <div className="coding-icon">
            <Link to="/Coding">
              <i className="fas fa-laptop-code"></i>
            </Link>
            <div className="tooltip">Coding</div>
          </div>
          <div className="performance-icon">
            <Link to="/Performance">
              <i className="fas fa-chart-line"></i>
            </Link>
            <div className="tooltip">Performance</div>
          </div>
          <div className='signing'>
            <Link to="/LogIn" className='no-underline-signin'>Sign In</Link>
          </div>
        </div>
      </div>
    );
  }
}
