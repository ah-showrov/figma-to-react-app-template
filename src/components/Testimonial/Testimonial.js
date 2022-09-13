
import './Testimonial.css';
import { Rating } from 'react-simple-star-rating';
const Testimonial = ({ testimonial }) => {

    const { name, id, rating, description, post, image } = testimonial;

    return (
        <div className='testimonial__container'>
            <div className='testimonial__profile'>
                <img className='review__profile__image' src={image} alt="reviwer-profile-image" />
                <span>
                    <h4 className='review__profile__name'> {name}</h4>
                    <h5 className='review__profile__post'> {post} </h5>
                </span>
            </div>

            <p className='review__description'> {description}</p>
            <p>
                <Rating size={25} readonly initialValue={rating} />
            </p>


        </div>
    )
}

export default Testimonial;