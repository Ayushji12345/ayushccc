import React from 'react'

const Header = () => {
  return (
    <div>
      <div>

        <nav>
        <input type="checkbox" id="check"></input>
        <label for="check">
            <i className='fas fa-bars'></i>
        </label>
         <label className='logo'>AYUSH</label>
         <ul>
            <li><a href='#' className='active'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Feedback</a></li>
         </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
