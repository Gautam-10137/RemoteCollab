import React, {useEffect} from 'react';
import { useProjects } from '../../context/ProjectContext';
import ProjectCard from './ProjectCard';
const ProjectList = () => {
    const { projects, fetchProjects, loading } = useProjects();
    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    if (loading) return <p>Loading...</p>;
    

    return (
        <section >
          <div >
            <h1 >Projects</h1>
            <div >
              {projects.length>0 && projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          </div>
        </section>
      );
    };

export default ProjectList