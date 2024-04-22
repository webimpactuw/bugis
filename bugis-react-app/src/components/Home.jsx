import React from 'react'
import days from '../assets/days-icon.png'
import time from '../assets/time-icon.png'
import location from '../assets/location-icon.png'

const Home = () => {
  return (
    <div className='text-[#393939]'>
      <h1 className='pt-56 text-center text-9xl font-prata'>BUGIS</h1>

      <ul className='flex justify-center gap-28 pt-20 pb-32 text-2xl font-poppins'>
        <li className='flex space-x-4 items-center'>
          <img className='h-10' src={days} alt="days-icon" />
          <p className='text-2xl tracking-wide'>MON – SAT</p>
        </li>
        <li className='flex space-x-4 items-center'>
        <img className='h-10' src={time} alt="time-icon" />
          <p className='text-2xl tracking-wide'>11AM – 9PM</p>
        </li>
        <li className='flex space-x-4 items-center'>
        <img className='h-10' src={location} alt="location-icon" />
          <p className='text-2xl tracking-wider underline decoration-[#E45B93] underline-offset-4'>UDistrict</p>
        </li>
      </ul>

      <div className='h-96 bg-[#FCECE7] pt-10 text-center'>
        <button className='bg-[#E45B93] py-2.5 px-8 rounded-full'>
          <p className='text-white text-2xl font-poppins font-semibold'>Explore Menu</p>
        </button>
      </div>

      <div className='pt-20'>
        <h1>About BUGIS</h1>

        <article>
          <p>
            We serve Asian, delicious, and hearty bowls for students to
            <br />eat in a variety of ways at a reasonable price.
            <br />
            <br />Each order is crafted to perfection by the owner himself.
          </p>
        </article>

        <button className='bg-[#E45B93] py-2.5 px-8 rounded-full'>
          <p className='text-white text-2xl font-poppins font-semibold'>Learn More</p>
        </button>
      </div>
    </div>
  )
}

export default Home