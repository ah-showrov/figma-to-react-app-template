import './Services.css';
import { services } from '../../data.js';
import Service from '../Service/Service';

const Services = () => {
    return (
        <div className='services__container'>

            <h3 className='services__sub__heading'>Service</h3>
            <h2 className='services__main__heading'> We're an agency tailored to all <br/>
clients' needs that always delivers </h2>

            <div className='services__flex__box'>
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </div>
            <button className='services__explore__button'> Explore more </button>
        </div>
    )
}


export default Services;