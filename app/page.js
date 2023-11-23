import Image from 'next/image'
import { Main } from './components/Main'
import { About } from './components/About'
import { ProjectsPage } from './components/ProjectPage'

export default function Home () {
  return (
    <main>
      <Main />
      <About />
      <ProjectsPage />
    </main>
  )
}
