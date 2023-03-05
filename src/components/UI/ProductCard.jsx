import React from 'react';
import { motion } from 'framer-motion';
import './Productcard.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
  return (
   <Col lg='3' md='4'className='mb-2'>
    <div className="product__item">
    <Link to={`/shop/${item.id}`}>
        <div className="product__img">
            <motion.img whileHover={{ scale: 0.9 }} src={ item.imgUrl } alt="avatar" />
        </div>
        <div className="p-2 product__info">
        <h3 className="product__name">{ item.productName }</h3>
        <span>{ item.category }</span>
        </div>
        </Link>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">₦{ item.price }</span>
            <motion.span whileTap={{ scale: 1.2 }} ><i class="ri-add-line"></i></motion.span>
        </div>
    </div>
   </Col>
  )
}

export default ProductCard