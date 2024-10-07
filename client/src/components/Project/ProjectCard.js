import React from 'react'
import {Link} from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div >
      <Link to={`/project/${project._id}`}>
      <div >{project.name}</div>
      <p >{project.description}</p>
      {project.members && project.tasks && (
        <>
          <p >Members: {project.members.length}</p>
          <p >Tasks: {project.tasks.length}</p>
        </>
      )}
    
      </Link>
    </div>
  );
};

export default ProjectCard