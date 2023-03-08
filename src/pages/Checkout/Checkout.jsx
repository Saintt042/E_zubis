import React from "react";
import "./Checkout.css";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import { useSelector } from "react-redux";




const Checkout = () => {

  

const totalQty = useSelector(state=>state.cart.totalQuantity)
const totalAmount = useSelector(state=>state.cart.totalAmount)

 



  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number" required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Street address" required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="City" required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal code" required />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" required />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty = <span>{ totalQty } items</span>
                </h6>
                <h6>
                  SubTotal = <span>₦{ totalAmount }</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br /> <p>free shipping</p>
                  </span>{" "}
                  <span>₦0</span>
                </h6>
                <h4>
                  Total Cost: <span>₦{ totalAmount }</span>
                </h4>
                <motion.button whileTap={{scale:1.2}} className="shop__btn auth__btn w-100">
                  Place order
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
