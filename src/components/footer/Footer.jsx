import React from 'react';
import Logo from '../../assets/images.jfif';
import '../../styles/footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <img
          src={Logo}
          alt="Movies"
        />
      </div>
      <div className="footer-content">
        <p className="copyright">Copyright © 2023, All Rights Reserved</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quis
          soluta sint dolorem ad rerum magnam, minus unde. Voluptatum, sed?
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
