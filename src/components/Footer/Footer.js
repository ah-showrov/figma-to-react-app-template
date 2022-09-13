import './Footer.css';
import facebook from '../../images/Icon/fb.png'
import instragram from '../../images/Icon/instra.png'
import linedin from '../../images/Icon/linked.png'
import youtube from '../../images/Icon/yt.png'
import mapPin from '../../images/Icon/map-pin.png'
const Footer = () => {
    return (
        <div className='footer__container'>

            <div className='footer__inner__container'>

                <div className='footer__address'>
                    <img src={mapPin} alt='map-pin-icon'/>
                    <p> H#000 (0th Floor), Road #00, <br />
                        New DOHS, Mohakhali, Dhaka, Bangladesh
                    </p>
                </div>
                <div className='footer__links__container'>
                    <ul>
                        <h3>Company</h3>

                        <li>About</li>
                        <li>Project</li>
                        <li>Our Team</li>
                        <li>Terms Conditions</li>
                        <li>Submit Listing</li>

                    </ul>
                    <ul>
                        <h3>Quick Links</h3>

                        <li>Quick Links</li>
                        <li>Rentals</li>
                        <li>Sales</li>
                        <li>Contact</li>
                        <li>Our blog</li>

                    </ul>
                </div>
                <div className='footer__about'>
                    <h3>About us</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Purus commodo ipsum
                        duis laoreet maecenas. Feugiat  </p>
                    <div>
                        <img className='footer__social__icon' src={facebook} alt=" facebook-icon" />

                        <img className='footer__social__icon' src={instragram} alt=" in-icon" />

                        <img className='footer__social__icon' src={linedin} alt=" -icon" />

                        <img className='footer__social__icon' src={youtube} alt=" -icon" />
                    </div>

                </div>

            </div>
            <p className='footer__copyright'> Copyright &copy; 2022 Showrov All Rights Reserved.</p>

        </div>

    )
}

export default Footer;