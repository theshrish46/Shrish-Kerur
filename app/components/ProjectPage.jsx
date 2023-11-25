'use client'

import React from 'react'
import Header from './Header'
import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'

const projects = [
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lectus ut libero pretium facilisis.',
    githubLink: 'https://github.com/yourusername/project1',
    liveLink: 'https://project1-live-link.com',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lectus ut libero pretium facilisis.',
    githubLink: 'https://github.com/yourusername/project1',
    liveLink: 'https://project1-live-link.com',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lectus ut libero pretium facilisis.',
    githubLink: 'https://github.com/yourusername/project1',
    liveLink: 'https://project1-live-link.com',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lectus ut libero pretium facilisis.',
    githubLink: 'https://github.com/yourusername/project1',
    liveLink: 'https://project1-live-link.com',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lectus ut libero pretium facilisis.',
    githubLink: 'https://github.com/yourusername/project1',
    liveLink: 'https://project1-live-link.com',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lectus ut libero pretium facilisis.',
    githubLink: 'https://github.com/yourusername/project1',
    liveLink: 'https://project1-live-link.com',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB']
  }
]

export const ProjectsPage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='container mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </div>
  )
}

export default ProjectsPage
