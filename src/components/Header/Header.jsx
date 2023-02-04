
import React , { useRef, useEffect }from 'react';

import './Header.css'
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import {Container,Row } from 'reactstrap';

const nav_links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },

]

const Header = () => {

    const headerRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener("scroll", ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }

        })
    }

    useEffect(()=>{
        stickyHeaderFunc();

        return () => window.removeEventListener("scroll", stickyHeaderFunc);
    });

    return <header className='header' ref={headerRef}>
      
            <Container>
                <Row>
                    <div className="nav_wrapper">

                        <div className="logo">
                            <img src={logo} alt="" />
                            <div>
                                <h1>Multimart</h1>
                            </div>
                        </div>

                        <div className='navigation'>
                            <ul className='menu'>
                                {nav_links.map((item, index)=> (
                                    <li className="nav_item" key={index}>
                                    <NavLink to={item.path} className = {(navClass) =>
                                        navClass.isActive ? 'nav_active' : ''}>
                                        {item.display}
                                    </NavLink>
                                </li>
                                ))}
                            </ul>
                        </div>

                        <div className="nav_icons">
                            <span classname='fav_icon'>
                                <i class="ri-heart-line"></i>
                                <span className='badge'>1</span>
                            </span>
                            <span className='cart_icon'>
                                <i class="ri-shopping-bag-line"></i>
                                <span className='badge'>1</span>
                            </span>
                            <span> <motion.img whileTap = {{scale: 1.2}} src={userIcon} alt="" /></span>
                        </div>

                        <div className="mobile_menu">
                            <span><i class="ri-menu-line"></i></span>
                        </div>
                    </div>
                </Row>
            </Container>
       

    </header>
};

export default Header;