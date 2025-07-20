// Nav bar
if (document.querySelector(".top")) {
  document.querySelector(".top").innerHTML = `
    <header id="header" class="header d-flex align-items-center sticky-top">
      <div class="container-fluid container-xl position-relative d-flex align-items-center">

        <a href="index.html" class="logo d-flex align-items-center me-auto">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <img src="assets/img/Web_logo.png" alt="logo">
          <h1 class="sitename">SMI SOFTS</h1>
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="#hero" class="active">Home<br></a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#team">Team</a></li>
            <li class="dropdown"><a href="#"><span>Services</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Web Design & Development</a></li>
                <li><a href="#">Graphic Designing</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Search Engine Optimization</a></li>
                <li><a href="#">Software Development</a></li>
                <li><a href="#">Mobile Apps Development</a></li>
                <li><a href="#">Accounts & Finance</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a class="btn-getstarted" href="#about">Get Started</a>

      </div>
    </header>
    `;
}

// Hero Section
if (document.querySelector(".herosection")) {
  document.querySelector(".herosection").innerHTML = `
        <div class="row justify-content-center" data-aos="zoom-out">
          <div class="col-xl-7 col-lg-9 text-center">
            <h1>BRINGING IDEAS TO LIFE, DIGITALLY</h1>
            <p>Innovating Business Performance With Technology</p>
          </div>
        </div>
        <div class="text-center" data-aos="zoom-out" data-aos-delay="100">
          <a href="#about" class="btn-get-started">Get Started</a>
        </div>
  `;
}

// Footer Section
if (document.querySelector(".footer")) {
  document.querySelector(".footer").innerHTML = `
        <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
           <img src="assets/img/favicon.png" alt="logo">
            <span class="sitename">SMI SOFTS</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href="https://www.facebook.com/smisofts/"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/smi.softs"><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/smisofts/"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            
            <li><a href="#">SEO</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p><strong>Phone:</strong> <span>+92 301 024 7722</span></p>
          <p><strong>WhatsApp:</strong> <span>+44 7917 317 216</span>
          <p><strong>Email:</strong> <span>info@smisofts.com</span></p>

           <p class="mt-4"><strong>Location:</strong> SMI SOFTS, <br> Karachi, Pakistan</p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright 2025</span> <strong class="px-1 sitename">SMI SOFTS.</strong> <span>All Rights Reserved</span></p>
    </div>
  `;
}
