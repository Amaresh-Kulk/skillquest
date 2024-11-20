import React, { Component } from 'react'
import '../style/Home.css';
export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='intro'>
        <h1>Master Your Interview Preparation</h1>
        <p>Comprehensive platform for aptitude testing and coding practice. Get ready for your dream job with our structured learning path.</p>
        </div>
        <div className='navigate'>
          <button className='item'>
              <div className='icon'>Photo</div>
              <div className='msg'>
                <div>Aptitude Tests</div>
                <p>Practice quantitative, logical and verbal reasoning</p>
              </div>
          </button>
          <button className='item'>
              <div className='icon'>Photo</div>
              <div className='msg'>
                <div>Aptitude Tests</div>
                <p>Practice quantitative, logical and verbal reasoning</p>
              </div>
          </button>
        </div>
      </div>
    )
  }
}
