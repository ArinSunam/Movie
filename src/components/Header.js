import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  }

  return (
    <div>

      <div>
        <NavLink><h1 className='bg-black-800'>Meow Movies</h1></NavLink>
      </div>




    </div>
  )
}

export default Header
