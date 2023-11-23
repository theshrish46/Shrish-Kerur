// ProjectCard.js

import React from 'react'
import { motion } from 'framer-motion'

export const ProjectCard = ({
  title,
  description,
  githubLink,
  liveLink,
  techStack
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-gray-800 p-6 rounded-md shadow-md'
    >
      <h3 className='text-xl font-bold mb-2'>{title}</h3>
      <p className='text-gray-400 mb-4'>{description}</p>
      <div className='flex items-center space-x-4 mb-4'>
        <a
          href={githubLink}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-white transition duration-300'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='w-6 h-6'
          >
            <path d='M9 19s-3 1.5-3 3v1h18v-1c0-1.5-3-3-3-3' />
            <path d='M3 17s-2-1-2-3V5a1 1 0 011-1h6' />
            <path d='M21 17s-2-1-2-3V5a1 1 0 00-1-1h-6' />
            <path d='M10 9H2M22 9H14' />
          </svg>
        </a>
        <a
          href={liveLink}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-white transition duration-300'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='w-6 h-6'
          >
            <path d='M5 12h14M12 5l7 7-7 7' />
          </svg>
        </a>
      </div>
      <div className='flex space-x-2'>
        {techStack.map(tech => (
          <div key={tech} className='bg-gray-700 p-2 rounded-md'>
            {tech}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectCard