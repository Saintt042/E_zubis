import React, { useRef, useEffect } from "react";
import "./Header.css";
import { Container, Row, Col } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {

  const headerRef = useRef(null)

  const stickyHeadFunct = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }


  useEffect(() => {
    stickyHeadFunct()
    return () => window.removeEventListener('scroll', stickyHeadFunct)
  })


  return (
    <header className="header" ref={ headerRef }>
      <Container>
       <Col lg='12' md='6'>
       <Row>
          <div className="nav__wrapper">
            <NavLink to="/">
              <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                  <h1>Zubismart</h1>
                  <p>Since 2021</p>
                </div>
              </div>
            </NavLink>

            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index} >
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display} </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              
              <span className="cart__icon">
              <NavLink to='cart'>
                <i class="ri-shopping-bag-line"></i>
                </NavLink>
                <span className="badge">1</span>
              </span>
              
              <span>
                <motion.img whileTap={{ scale: 2.1 }} src={userIcon} alt="userImage" />
              </span>
            </div>

            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
       </Col>
      </Container>
    </header>
  );
};

export default Header;
