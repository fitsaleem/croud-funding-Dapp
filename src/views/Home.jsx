import { useEffect } from 'react'
import AddButton from '../components/AddButton'
import CreateProject from '../components/CreateProject'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'
// import Banner from '../components/Banner'
import Team from '../components/Team'

const Home = () => {
  const [projects] = useGlobalState('projects')

  useEffect(async () => {
    await loadProjects()
  }, [])
  return (
    <>
      {/* <Banner />   */}
      <Hero />
      <Projects projects={projects} />
      <CreateProject />
      <AddButton />
      <Team />
    </>
  )
}

export default Home
