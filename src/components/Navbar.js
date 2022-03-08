import React from 'react'
import {Link, NavLink, withRouter } from "react-router-dom"

const Navbar = () => {
  //  after parsing props peremeter it will give access to axtra props
  // console.log(props);
  // setTimeout(()=>{
  //   props.history.push('/about')
  // },2000) 
  //this function will redirect after 2 sec
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke' Times</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        {/*NavLink is to put the active attrib to the anchor element*/}
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar);
//for higher order component