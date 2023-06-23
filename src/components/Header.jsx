import Image from 'next/image'
import React, { useState, useCallback } from 'react'
import hero from './../../public/profile/unnamed.jpg'
import { FaMoon, FaSun } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Header = () => {



  const [active, setActive] = useState(false);
  const handleActive = useCallback(() => {

    active ? setActive(false) : setActive(true)
  })
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: 15 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.25 }}
        className='flex justify-between items-center'>
        <Image src={hero} alt='logo' className='w-12 h-12 rounded-full
        sm:w-16 sm:h-16
        ' />

        <div className='flex justify-center items-center'>
          <button onClick={handleActive} className='mx-2'>{
            active ?
              <FaSun size={20} className='transition-all duration-1000 hover:w-6 hover:h-6 hover:animate-spin' /> :
              <FaMoon size={20} className='transition-all -rotate-180 duration-1000 hover:-rotate-0 hover:w-6 hover:h-6' />
          }</button>

          <button className='mx-2 px-2 py-1 text-white font-semibold bg-sky-500 hover:bg-sky-400 rounded-md
          transition-all hover:-translate-y-1
          
          '>
            Resume</button>
        </div>
      </motion.div>
    </>
  )
}

export default Header
