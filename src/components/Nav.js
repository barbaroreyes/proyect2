import React from 'react';
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
    <div className="nav">
      <Link to ='/'>link1</Link>
      <Link to ='/decks'>Link2</Link>
      
    </div>
  )
}

export default Nav
