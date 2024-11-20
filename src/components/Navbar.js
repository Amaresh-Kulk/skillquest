import React, { PureComponent } from 'react'
import '../style/Navbar.css';
export default class Navbar extends PureComponent {
  render() {
    return (
      <div className='navbar'>
        <div className='left-nav'>
          CodeQuest
        </div>
        {/* <div className='mid-nav'>
          middle
        </div> */}
        
        <div className='right-nav'>
          <div>Home</div>
          <div>Aptitude</div>
          <div>Coding</div>
        </div>
      </div>
    )
  }
}
