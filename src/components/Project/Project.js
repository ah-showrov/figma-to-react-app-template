import './Project.css';
import {MdLocationOn} from 'react-icons/md'

const Project =({project})=>{
    const {image,title,id,location}= project;
    return(
        <div className='project__container'>
            <img className='project__image' src={image} alt="project-image" />
            <h4 className='project__title'> {title} </h4>
            <p className='project__location'> <MdLocationOn style={{color:'#1F1632',marginRight:'4px',fontSize:'19px'}}/> {location} </p>
        </div>


    )
}

export default Project;