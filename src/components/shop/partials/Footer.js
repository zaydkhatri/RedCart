import React, { Fragment } from "react";

const Footer = (props) => {
  return (
    <Fragment>
      <footer className="footer" id="contact">
        <div className="footer__addr">
          <h1 className="footer__logo">Redcart</h1>
          {/* <h2>Registered Office Address:</h2> */}
          <p>RedCart Internet Private Limited,</p>
          <p>Xyz, near abc.</p>
          <p>Mail Us: <a href="mailto:mzaydk@gmail.com">redcart.support@gmail.com</a></p>
        </div>

        <ul className="footer__nav" id="contact">
          <li className="nav__item">
            <h2 className="nav__title">ABOUT</h2>
            <ul className="nav__ul">
              <li>
                <a href="#" className="underline-on-hover">Careers</a>
              </li>
              <li>
                <a href="#" className="underline-on-hover">Policy</a>
              </li>
              <li>
                <a href="#" className="underline-on-hover">Stories</a>
              </li>
              <li>
                <a href="#" className="underline-on-hover">Wholesale</a>
              </li>
              <li>
                <a href="#" className="underline-on-hover">corporate</a>
              </li>
            </ul>
          </li>

          <ul className="footer__nav">
            <li className="nav__item">
              <h2 className="nav__title">HELP</h2>
              <ul className="nav__ul">
                <li>
                  <a href="#" className="underline-on-hover">Payments</a>
                </li>
                <li>
                  <a href="#" className="underline-on-hover">Shipping</a>
                </li>
                <li>
                  <a href="#" className="underline-on-hover">Cancellation & Return</a>
                </li>
                <li>
                  <a href="#" className="underline-on-hover">FAQ</a>
                </li>
                <li>
                  <a href="#" className="underline-on-hover">Report Infringement</a>
                </li>
              </ul>
            </li>
          </ul>


          <ul className="nav__item">
            <li className="nav__title">
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-google"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-instagram"></a>
            </li>
          </ul>
        </ul>


        <div className="legal">
          <p>Copyright 	&copy; 2019 All Rights Reserved by RIPL.</p>

          <div className="legal__links">
            Develop & Design By Zayd 2022
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
