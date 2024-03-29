import Image from 'next/image'
import { Main } from './components/Main'
import { About } from './components/About'
import { ProjectsPage } from './components/ProjectPage'
import SkillsPage from './components/Skills'

export default function Home () {
  return (
    <main>
      <Main />
      <About />
      <SkillsPage />
      <ProjectsPage />
    </main>
  )
}
