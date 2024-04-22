import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.png'

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Menu' },
    { id: 3, text: 'About Us' },
  ];

  return (
    <div className='flex justify-between items-center bg-[#F3EEEA] px-16 pr-16 h-20'>
      {/* Logo */}
      <img className='h-20' src={logo} alt="Logo" />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex gap-24 text-[#393939] font-librebaskerville pr-16 tracking-wide font-thin'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='text-2xl'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <img src={logo} alt="Logo" />

        {navItems.map(item => (
          <li
            key={item.id}
            className='text-2xl'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar