import React from 'react';
import '../style/Home.css';
import aptitudeLogo from '../images/aptitude.png';
import codingLogo from '../images/coding.png';
import trophyLogo from '../images/trophyLogo.jpg';
import communityLogo from '../images/community.jpg';
import { Link } from 'react-router-dom'; 
const Home = () => {
  const navigationItems = [
    {
      icon: aptitudeLogo,
      title: 'Aptitude Tests',
      description: 'Practice quantitative, logical, and verbal reasoning',
      link: 'Aptitude',
    },
    {
      icon: codingLogo,
      title: 'Coding Challenges',
      description: 'Enhance problem-solving skills with hands-on coding',
      link: 'Coding',
    },
  ];

  const whyUsItems = [
    {
      logo: trophyLogo,
      heading: 'Comprehensive Practice',
      subHead: 'Cover all aspects of technical interviews',
    },
    {
      logo: communityLogo,
      heading: 'Industry Standard',
      subHead: 'Questions based on real interview experiences',
    },
  ];
  // function sleep(milliseconds) {
  //   const start = Date.now();
  //   while (Date.now() - start < milliseconds) {
  //     // Do nothing, just wait
  //   }
  // }

  return (
    <div className='home'>
      <div className='intro'>
        <h1>Master Your Interview Preparation</h1>
        {/* <p>Comprehensive platform for aptitude testing and coding practice.</p> */}
        {/* <button>Get Started</button> */}
      </div>

      <div className='navigate'>
        {navigationItems.map((item, index) => (
          <Link to={item.link} className='no-underline'>
            <button key={index} className='item'>
              <div className='icon'>
                <img src={item.icon} alt={item.title} />
              </div>
              <div className='msg'>
                <div>{item.title}</div>
                <p>{item.description}</p>
              </div>
            </button>
          </Link>
        ))}
      </div>

      <div className='why-us'>
        <div className='question'>Why Choose Us?</div>
        <div className='answer'>
          
            {whyUsItems.map((item, index) => (
              <div key={index} className='why-us-item'>
                <div className='logo'>
                  <img src={item.logo} alt="" />
                </div>
                <div className='explanation'>
                  <div className='headingHome'>{item.heading}</div>
                  <div className='sub-head'>{item.subHead}</div>
                </div>
              </div>
              
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
