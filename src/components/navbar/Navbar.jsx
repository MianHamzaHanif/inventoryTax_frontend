import React from "react";
import logo from "../../assets/unnamed-removebg-preview.png";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <img src={logo} width={150} alt="" />
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ms-lg-4">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item ms-lg-4">
              <a class="nav-link" href="#">
                Staff
              </a>
            </li>
           
          </ul>
        
          {/* <div className="d-flex">
            <Sidebar />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
