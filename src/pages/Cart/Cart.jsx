import React from "react";
import "./Cart.css";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../../redux/slice/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector(state=> state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Here is your shopping cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added to your cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">Subtotal<i class="ri-arrow-right-circle-fill"></i>
                <span className="fs-4 fw-bold">₦{ totalAmount }</span>
                </h6>
               
              </div>
              <p className="fs-6 mt-2">taxes and shipping will calculate in checkout</p>
              <div>
               
                <motion.button whileTap={{ scale: 1.2 }} className="shop__btn w-100">
                  <Link to='/checkout'>Checkout</Link>
                </motion.button>
                <motion.button whileTap={{ scale: 1.2 }} className="shop__btn w-100 mt-3">
                  <Link to='/shop'>Continue Shopping</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {

  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }


  return ( 
  <tr>
  <td>
    <img src={item.imgUrl} alt={item.productName} />
  </td>

  <td>{item.productName}</td>

  <td>₦{item.price}</td>

  <td>{item.quantity}pcs</td>

  <motion.td whileTap={{ scale: 1.2 }}>
    <i class="ri-delete-bin-5-line" onClick={deleteProduct}></i>
  </motion.td>
</tr>
)}


export default Cart;
