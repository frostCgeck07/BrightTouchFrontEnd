import React from "react";

const Header = () => {
  return (
    <div>
      <header id="header" class="fixed-top header-inner-pages">
        <div class="container d-flex align-items-center justify-content-lg-between">
          <h1 class="logo me-auto me-lg-0">
            <a href="index.html">
              Bright Touch<span>.</span>
            </a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          <a href="index.html" class="logo me-auto me-lg-0">
            <img src="assets/img/logo.png" alt="" class="img-fluid" />
          </a>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto " href="#">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#">
                  Services
                </a>
              </li>
              <li>
                <a class="nav-link scrollto " href="#">
                  Portfolio
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#">
                  Team
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a href="#" class="get-started-btn scrollto">
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
