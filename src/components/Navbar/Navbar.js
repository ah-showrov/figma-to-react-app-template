
import './Navbar.css';
import logoIcon from '../../images/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import {MdOutlineCancelPresentation} from 'react-icons/md'
import { useState } from 'react';
const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false);
    return (
        <nav className="nav__container">
            <div className="nav__inner__container">
                <div>
                    <img className="nav__logo" src={logoIcon} alt="navbar logo icon" />
                </div>
                <ul className={isOpen ? "nav__menu__mobile__container  nav__menu__container " : "nav__menu__container"}>
                    <li className="nav__menu__link">Home</li>
                    <li className="nav__menu__link">About us</li>
                    <li className="nav__menu__link">Projects</li>
                    <li className="nav__menu__link">Contact</li>
                    <li className="nav__menu__link">Admin</li>
                    <button className="nav__menu__login__link"> Login </button>

                </ul>
                    <button className="nav__login__button"> Login </button>
                <div className="nav__hamburger__icons__wrapper">
                    {
                        isOpen ? <MdOutlineCancelPresentation  className="nav__hamburger__cross__icon" onClick={()=>setIsOpen(!isOpen)}/>: <GiHamburgerMenu className="nav__hamburger__line__icon" onClick={()=>setIsOpen(!isOpen)} />
                    
                    }
                    
                </div>
            </div>
        </nav>
    )
};

export default Navbar;