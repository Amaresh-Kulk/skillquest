import React from 'react';
import '../style/Home.css';
import aptitudeLogo from '../images/aptitude.png';
import codingLogo from '../images/coding.png';
import trophyLogo from '../images/trophyLogo.jpg';
import communityLogo from '../images/community.jpg';
const Home = () => {
  const navigationItems = [
    {
      icon: aptitudeLogo,
      title: 'Aptitude Tests',
      description: 'Practice quantitative, logical, and verbal reasoning',
      link: 'Aptitude.js',
    },
    {
      icon: codingLogo,
      title: 'Coding Challenges',
      description: 'Enhance problem-solving skills with hands-on coding',
      link: 'Coding.js',
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

  return (
    <div className='home'>
      <div className='intro'>
        <h1>Master Your Interview Preparation</h1>
        <p>Comprehensive platform for aptitude testing and coding practice. Get ready for your dream job with our structured learning path.</p>
      </div>

      <div className='navigate'>
        {navigationItems.map((item, index) => (
          <a href={item.link}>
            <button key={index} className='item'>
              <div className='icon'>
                <img src={item.icon} alt={item.title} />
              </div>
              <div className='msg'>
                <div>{item.title}</div>
                <p>{item.description}</p>
              </div>
            </button>
          </a>
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
                  <div className='heading'>{item.heading}</div>
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
