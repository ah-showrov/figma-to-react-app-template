import './Header.css'
import headerRightImage from '../../images/Image/header-right.png'
const Header = () => {
    return (
        <div className='header__container'>
            <div className='header__inner__container'>  
                <div className="header__left">
                <h1 className='header__heading'> We Build <br/>Your Dream </h1>
                   <p className='header__short__description'>Online Easte Agency, the mordern way to sell your own home,<br/>
                    You can use Griffin Residential to market your property</p>
                    <button className='header__booking__button'>Booking</button>
                </div>
                <div className="header__right">
                    <img className='header__right__image' src={headerRightImage} alt='header-right-img' />
                </div>
            </div>
        </div>
    )
}
export default Header;