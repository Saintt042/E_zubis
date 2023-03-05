import React from 'react';
import './Footer.css';
// import { motion } from 'framer-motion';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear()


  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4'>
          
              <div className="logo">
                <Link to="/">
                  <h1 className='text-white'>Zubismart</h1>
                  </Link>
                </div>            
              <p className="footer__text mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus mollitia perferendis maiores ipsam neque labore quis assumenda odio esse.
                </p>
          </Col>

          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='2'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='3'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>42 UNN Market Road, Nsukka, Nigeria</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+2348118155109</p>
                  <p>+2348181183423</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  <p>contact@zubismart.com</p>
                </ListGroupItem>
                <div className='socials'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <a href="https://web.facebook.com/zubismartonline" target='_blank' rel='noreferrer'><i class="ri-facebook-circle-fill"></i></a>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <a href="https://www.instagram.com/zubismartonline/" target='_blank' rel='noreferrer'><i class="ri-instagram-fill"></i></a>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <a href="https://chat.whatsapp.com/EEshsKhnjf8Dtt9HKcGJTf" target='_blank' rel='noreferrer'><i class="ri-whatsapp-fill"></i></a>
                </ListGroupItem>
                </div>

              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer__copyright">Copyright { year } developed by saintt042. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer