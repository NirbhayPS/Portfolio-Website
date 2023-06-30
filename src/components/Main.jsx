import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='Main'>
      <img className='w-full h-screen object-cover object-left ' src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 font-sans'>I'm Nirbhay Pratap Singh</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 font-mono'>I'm a
            <TypeAnimation
              sequence={[
                'Developer', // Types 'One'
                1000, // Waits 1s
                'Coder', // Deletes 'One' and types 'Two'
                1000, // Waits 1s
                'Tech Enthusiast',
                1000,

              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            {/* <FaTwitter className = 'cursor-pointer' size = {20}/> */}
            <a href="https://www.facebook.com/itsNirbhay" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com/i_nirbhaysingh/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='cursor-pointer' size={20} />
            </a>
            <a href="https://www.linkedin.com/in/nirbhayps/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className='cursor-pointer' size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main;