import React from 'react';
import './ProjectCard.scss';

export const ProjectCard = ({project}) => {
  return(
    <article className='project-card'>
      <img className='project-img' src={project.image} alt='screenshot of project' />
      <h2>{project.title}</h2>
      <p className='p-text'>{project.description}</p>
      <div className='project-links'>
        <a href={project.app} target="_blank" rel="noopener noreferrer">Launch App</a>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">Repository Page</a>
      </div>
    </article>
  )
}