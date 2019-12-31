import React from 'react'
import './ProjectCont.scss'
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { projects } from '../projects'

const ProjectCont = () => {
  const allProjects = projects.map(project => {
    return <ProjectCard project={project} key={project.title} />
  })

  return (
    <div className='projectcont-backgrnd'>
      <h1 className='projects-title'>Projects</h1>
      <div className='projects-wrapper'>
        {allProjects}
      </div>
    </div>
  )
}

export default ProjectCont;