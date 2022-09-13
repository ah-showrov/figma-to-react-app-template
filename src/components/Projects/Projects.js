import './Projects.css';
import { projects } from '../../data.js'
import Project from '../Project/Project';

const Projects = () => {
    return (
        <div className='projects__container'>

            <h3 className='projects__sub__heading'>Projects</h3>
            <h2 className='projects__main__heading'> Discover the latest Interior Design <br/> available today </h2>

            <div className='projects__flex__box'>
                {
                    projects.map(project => <Project key={project.id} project={project} />)
                }
            </div>
        </div>
    )
}


export default Projects;