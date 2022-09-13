import './Service.css';
import { MdLocationOn } from 'react-icons/md'

const Service = ({ service }) => {
    const { image, title, id, description, price } = service;
    return (
        <div className='service__container'>
            <img className='service__image' src={image} alt="service-image" />
            <h4 className='service__title'> {title} </h4>
            <h4 className='service__price'> ${price} </h4>
            <p className='service__description'> {description} </p>
        </div>


    )
}

export default Service;