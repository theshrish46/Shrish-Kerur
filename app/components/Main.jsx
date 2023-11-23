'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import headerimage from '/public/unnamed.jpg'

export const Main = () => {
  return (
    <section className='h-screen flex flex-col items-center justify-center text-white bg-gradient-to-r from-blue-600 to-purple-600'>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-5xl font-bold mb-4'
      >
        Web Developer | Designer | Creator
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-lg text-center max-w-md'
      >
        Welcome to my portfolio. I build web applications with passion and
        creativity.
      </motion.p>
    </section>
  )
}
