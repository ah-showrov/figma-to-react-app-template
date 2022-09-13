
import './Testimonials.css';
import Slider from 'react-slick';
import { testimonials } from '../../data';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className='testimonials__container'>
            <h2 className='testimonials__heading'> Testimonials </h2>
            <Slider {...settings} className="slider__setting">
                {
                    testimonials.map(testimonial => <Testimonial key={testimonial.id} testimonial={testimonial} />)
                }
            </Slider>
        </div>
    )
}

export default Testimonials;