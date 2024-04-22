import React from 'react'
import days from '../assets/days-icon.png'
import time from '../assets/time-icon.png'
import location from '../assets/location-icon.png'
import about from '../assets/about-bugis.png'

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
        <button className='bg-[#E45B93] py-3 px-14 rounded-full'>
          <p className='text-white text-xl font-poppins font-semibold tracking-wide'>Explore Menu</p>
        </button>
      </div>

      <div className='flex justify-evenly pt-64 pb-72'>
        <img className='h-auto max-w-lg pl-14' src={about} alt="about-bugis" />

        <div className='pt-10'>
          <h1 className='font-librebaskerville text-6xl tracking-wide'>About BUGIS</h1>

          <article className='font-poppins text-2xl pb-24 pt-10 tracking-wide font-light'>
            <p>
              We serve Asian, delicious, and hearty bowls for students to
              <br />eat in a variety of ways at a reasonable price.
              <br />
              <br />Each order is crafted to perfection by the owner himself.
            </p>
          </article>

          <button className='bg-[#E45B93] py-3 px-14 rounded-full'>
            <p className='text-white text-xl font-poppins font-semibold tracking-wide'>Learn More</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home