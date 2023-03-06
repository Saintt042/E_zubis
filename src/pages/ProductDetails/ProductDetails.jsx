import React from "react";
import "./ProductDetails.css";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import { motion } from "framer-motion";




const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
  } = product;

  return (
    <Helmet title={ productName }>
      <CommonSection  title={ productName } />

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt={productName} />
            </Col>

            <Col lg="6" className="wrapper">
              <div className="product__details">
                <h2> {productName} </h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p>(<span>{avgRating}</span> ratings)</p>
                </div>
                <span className="product__price">₦{price}</span>
                <p className="mt-3">{shortDesc}</p>
                <motion.button whileTap={{ scale: 1.2 }} className="shop__btn">Add to Cart</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6>Description: <p>{ description } </p></h6>
                <h6>Reviews ({ reviews.length })</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
