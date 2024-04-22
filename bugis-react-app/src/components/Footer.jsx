import React from 'react'
import email from '../assets/email-icon.png'
import phone from '../assets/phone-icon.png'
import place from '../assets/place-icon.png'

const Footer = () => {
  return (
    <div className='flex justify-between h-80 bg-[#F3EEEA]'>
      <div className='pl-28 pt-16 tracking-wide'>
        <h1 className='font-prata text-7xl text-center'>BUGIS</h1>
        <ul className='flex justify-between text-[#393939] font-librebaskerville pt-3'>
          <li className='text-xl'>Home</li>
          <li className='text-xl'>Menu</li>
          <li className='text-xl'>About Us</li>
        </ul>
      </div>

      <div className='pr-36 pt-14'>
        <h2 className='font-librebaskerville h-8 text-3xl tracking-wide'>Contact Us</h2>
        <ul className='font-poppins gap-4 pt-5 font-light tracking-wide'>
          <li className='flex gap-10 items-center pb-3'>
            <img className='w-6' src={email} alt="email-icon" />
            <p>Bugis@yahoo.com</p>
          </li>
          <li className='flex gap-10 items-center pb-3'>
            <img className='w-6' src={phone} alt="phone-icon" />
            <p>(206) 547-1918</p>
          </li>
          <li className='flex gap-10 items-center'>
            <img className='w-6' src={place} alt="place-icon" />
            <p>
              4241 NE University Way
              <br />Seattle, WA 98105
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer