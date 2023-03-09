import React from 'react';
import { motion } from 'framer-motion';
import './Productcard.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slice/cartSlice';


const ProductCard = ({ item }) => {

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
        }));

        toast.success('🤗Product added to your cart', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    };

    const minusFromCart = () => {
        dispatch(cartActions.minusItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
        }));
        toast.success('Product removed from your cart', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }



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
            <motion.span whileTap={{ scale: 1.2 }} onClick={ minusFromCart } ><i class="ri-subtract-line"></i></motion.span>
            <motion.span whileTap={{ scale: 1.2 }} onClick={ addToCart } ><i class="ri-add-line"></i></motion.span>
        </div>
    </div>
   </Col>
  )
}

export default ProductCard