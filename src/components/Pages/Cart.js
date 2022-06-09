import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../Home/home.module.css";
import {
  Container,
  ListGroup,
  FormControl,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";

import { numberWithComas } from "../Pages/Home";
import { AiFillDelete } from "react-icons/ai";
import { changeCartQTY, RemoveFromCart } from "../../actions/cartActions";
import { Link } from "react-router-dom";

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

const Cart = () => {
  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.userLog);
  const cartList = useSelector((state) => state.cartList);

  const { userInfo } = userLog;
  const { cart } = cartList;
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
    );
  }, [cart]);

  const delivery = (0.5 / 100) * total;
  const totalPrice = Math.round(delivery + total).toFixed();

  const handleRemove = (products) => {
    dispatch(RemoveFromCart(products));
  };

  const handleQtyChange = (products) => {
    dispatch(changeCartQTY(products));
  };

  const payTinyPesa = async (e) => {
    e.preventDefault();
    let account_Number = process.env.REACT_APP_Account_No;
    let url = "https://tinypesa.com/api/v1/express/initialize";
    fetch(url, {
      body: `amount=${totalPrice}&msisdn=${userInfo.phone}&account_no=${account_Number}`,
      headers: {
        Apikey: process.env.REACT_APP_ApiKey,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });
  };
  return (
    <div className={classes.home}>
      <div className={classes.productContainer}>
        <Container>
          <ListGroup>
            {cart.map((products) => (
              <ListGroup.Item key={products._id}>
                <Row>
                  <Col md={2}>
                    <Image src={products.image} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{products.title}</span>
                  </Col>
                  <Col md={2}>
                    <span>{numberWithComas(products.price)}</span>
                  </Col>
                  <Col md={2}>
                    <span
                      style={{
                        paddingBottom: "5px",
                      }}
                    >
                      Quantity
                    </span>
                    <FormControl
                      as="select"
                      value={products.qty}
                      onChange={(e) =>
                        handleQtyChange({
                          qty: e.target.value,
                          _id: products._id,
                        })
                      }
                    >
                      {[...Array(products.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </FormControl>
                  </Col>
                  <Col md={2}>
                    <AiFillDelete
                      style={{
                        color: "red",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleRemove(products)}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      </div>
      <div className={classes.filtercart}>
        <span>Checkout ({cart.length}) Items</span>
        <span>Items Price Ksh: {total}</span>
        <span>Delivery Fee: {delivery}</span>
        <span>Total Price Ksh: {numberWithCommas(totalPrice)}</span>

        <div className={classes.payment}></div>
        <div
          style={{
            paddingTop: "30px",
          }}
        >
          <Link to={userInfo ? "/checkout" : "/login"}>
            <Button
              style={{
                margin: "0 10px",
                padding: "10px",
                color: "#fff",
                fontWeight: "bolder",
              }}
              variant="warning"
              onClick={payTinyPesa}
            >
              Mpesa_PAY{" "}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
