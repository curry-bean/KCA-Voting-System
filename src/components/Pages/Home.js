import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products } from "../../actions/productsActions";
import ErrorMessage from "../../helpers/ErrorMessage";
import Loading from "../../helpers/Loading";
import SideBar from "../Home/SideBar";
import classes from "../Home/home.module.css";
import { FcFlashAuto } from "react-icons/fc";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AddToCartAction, RemoveFromCart } from "../../actions/cartActions";
import React, { useState, useRef, useEffect } from 'react';

export function numberWithComas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const cartList = useSelector((state) => state.cartList);
  const { cart } = cartList;

  const { products, error, loading } = productList;

  console.log(products);
  useEffect(() => {
    dispatch(Products());
  }, [dispatch]);

  const settings = {
    dots: true,
    speed: 1000,
  };

  const handleAddToCart=(product)=>{
     dispatch(AddToCartAction(product));
  }

  const handleRemoveFromCart=(product)=>{
    dispatch(RemoveFromCart(product));
  }

  return (
    <>
      <div className={classes.home}>
        {error && (
          <ErrorMessage variant={error.info ? "info" : "danger"}>
            {error}
          </ErrorMessage>
        )}
        {loading && <Loading />}
        <SideBar />
        <div className={classes.productContainer}>
          <div className={classes.header}>
            <span>
              <FcFlashAuto
                style={{
                  fontSize: "35px",
                }}
              />{" "}
              VOTE for your next leadership committee
            </span>


	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState('00:00:00');


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}


	const startTimer = (e) => {
		let { total, hours, minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}


	const clearTimer = (e) => {

		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next
		setTimer('00:00:10');

		// If you try to remove this line the
		// updating of timer Variable will be
		// after 1000ms or 1sec
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + 10);
		return deadline;
	}

	// We can use useEffect so that when the component
	// mount the timer will start as soon as possible

	// We put empty array to act as componentDid
	// mount only
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	// Another way to call the clearTimer() to start
	// the countdown is via action event from the
	// button first we create function to be called
	// by the button.
	return (
		<div style={{
        display:'flex',
        }}
    >
			<h2>{timer}</h2>
			
		</div>
	)




          </div>
          {products.map((product) => {
            return (
              <Slider {...settings} key={product._id}>
                <div
                  style={{
                    width: "50%",
                    background: "#fff",
                  }}
                >
                  <Link to={`/produt/${product._id}`}>
                    <img
                      src={product.image}
                      height="120px"
                      alt={product.title}
                    />
                  </Link>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span>{product.title}</span>
                    <span>
                      {product.description.substring(0, 10)}{" "}
                      {product.description.length >= 10 && `...`}
                    </span>
                    <h5>Ksh. {numberWithComas(product.price)}</h5>
                  </div>
                  <div>
                    {cart.some((p) => p._id === product._id) ? (
                      <Button
                        style={{
                          fontWeight: "bolder",
                        }}
                        variant="danger"
                        onClick={() => handleRemoveFromCart(product)}
                      >
                        {" "}
                        REMOVE
                      </Button>
                    ) : (
                      <Button
                        style={{
                          fontWeight: "bolder",
                        }}
                        variant="warning"
                        disabled={!product.inStock}
                        onClick={()=>handleAddToCart(product)}
                      >
                        {!product.inStock ? "Out of Stock" : "ADD"}{" "}
                      </Button>
                    )}
                  </div>
                </div>
              </Slider>
            );
          })}
        </div>
      </div>
      <div className={classes.header2}>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Advancing Knowledge, Driving Change
        </span>
      </div>
    </>
  );
};

export default Home;
