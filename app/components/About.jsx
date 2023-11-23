'use client'
import React from 'react'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <section id='about' className='py-16 bg-gray-800 text-white'>
      <div className='container mx-auto flex flex-col md:flex-row items-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='md:w-1/2 mb-8 md:mb-0'
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-3xl font-bold mb-4'
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-lg leading-relaxed'
          >
            Hi, I'm [Your Name], a passionate and creative MERN (MongoDB,
            Express.js, React.js, Node.js) stack developer. I specialize in
            building RESTful APIs, beautiful MERN stack applications, and
            complete full-stack applications using the MERN and Next.js stacks.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='md:w-1/2'
        >
          <img
            src='https://via.placeholder.com/800x600' // Replace with your actual image source
            alt='Profile'
            className='rounded-md w-full h-auto'
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About
