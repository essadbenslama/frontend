import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <p>
        <Link style={{ textDecoration: "none", color: "black" }} href="#">
          <h4>Des Questions? Contactez-nous</h4>
        </Link>
      </p>
      <p>
        <Link style={{ textDecoration: "none", color: "black" }} href="#">
          {" "}
          FAQ
        </Link>{" "}
      </p>
      <p style={{ color: "black" }}>Copyright 2024, All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
