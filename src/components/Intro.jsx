import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'
import hero from './../../public/profile/unnamed.jpg'


const Intro = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row md:justify-around md:items-center md:gap-5'>
        <motion.div
          initial={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className='text-white flex flex-col justify-center items-center md:items-start my-8'>
          <motion.h2
            className='text-2xl my-2 sm:text-3xl sm:my-4'
          >
            Hello
          </motion.h2>
          <motion.h1
            initial={{}}
            className='text-3xl font-semibold italic my-2 sm:text-5xl sm:my-4'
          >
            I am Shrish
          </motion.h1>
          <motion.p
            initial={{}}
            className='text-xl font-normal my-2 sm:text-3xl sm:my-4'
          >
            <Typewriter
              options={{
                strings: ['Front-End Developer', 'And A Freelancer'],
                autoStart: true,
                loop: true,
                pauseFor: '10000',
                cursor: ''
              }}
            />
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.25 }}
          className='flex justify-center items-center my-8'>
          <Image src={hero} alt='logo' className='w-52 h-52 rounded-full sm:w-72 sm:h-72' />
        </motion.div>
      </div>
    </>
  )
}

export default Intro
