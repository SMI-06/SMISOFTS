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
            <li><a href="index.html">Home<br></a></li>
            <li><a href="about-us.html">About</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="team.html">Team</a></li>
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
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a class="btn-getstarted" href="contact-us.html">Contact</a>

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

// About Us Section
if (document.querySelector(".about")) {
  document.querySelector(".about").innerHTML = `
         <!-- Section Title -->
        <div class="container section-title" id="headingabout" data-aos="fade-up">
          <h2 id="heading-text">About Us</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
      <!-- End Section Title -->

       <div class="container">

        <div class="row gy-4">
          <div class="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/img/about.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
            <h3 id="subhead">Your Partner for Smarter Success</h3>
            <p class="fst-italic">SMI SOFTS is a technology company offering complete 360° business solutions. With expertise in IT, marketing, and software services, we help businesses grow, stand out, and succeed in a competitive market. Our focus is on simplifying technology, improving efficiency, and delivering results through strategies tailored to each client’s needs.  
            </p>
            <ul>
              <li><i class="bi bi-check2-all"></i> <span>Comprehensive 360° business growth strategies.</span></li>
              <li><i class="bi bi-check2-all"></i> <span>Custom IT solutions designed for scalability and efficiency.</span></li>
              <li><i class="bi bi-check2-all"></i> <span>Creative branding and marketing to boost visibility.</span></li>
            </ul>
            <p>
              At SMI SOFTS, we deliver innovative solutions that help your business thrive. Our expert team crafts seamless IT, software, and marketing services designed to maximize efficiency, boost growth, and create measurable impact. We focus on results, so you can focus on success.
            </p>
          </div>
        </div>

      </div>

      <div class="container mt-5">

        <div class="row gy-4">

          <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>
              At SMI SOFTS, our expert team delivers websites, softwares, designing, and digital marketing solutions designed to help your business grow. We focus on innovation, quality, and measurable results in every project.
            </p>
            <ul>
              <li><i class="bi bi-check2-circle"></i> <span>Softwares, Websites, Graphic Designing, and marketing built for growth.</span></li>
              <li><i class="bi bi-check2-circle"></i> <span>Every solution drives measurable impact.</span></li>
              <li><i class="bi bi-check2-circle"></i> <span>Skilled professionals turning ideas into success.</span></li>
            </ul>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <img src="assets/img/about.jpg" class="img-fluid" alt="">
          </div>
        
        </div>

      </div>


      <div class="container anibg mt-5">
<div class="background-blobs"></div>
        <div class="row gy-4">
          <div class="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/img/about.jpg" class="img-fluid img-3d" alt="">
          </div>
          <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
            <h3 id="subhead">Your Partner for Smarter Success</h3>
            <p class="fst-italic">SMI SOFTS is a technology company offering complete 360° business solutions. With expertise in IT, marketing, and software services, we help businesses grow, stand out, and succeed in a competitive market. Our focus is on simplifying technology, improving efficiency, and delivering results through strategies tailored to each client’s needs.  
            </p>
            <ul>
              <li><i class="bi bi-check2-all"></i> <span>Comprehensive 360° business growth strategies.</span></li>
              <li><i class="bi bi-check2-all"></i> <span>Custom IT solutions designed for scalability and efficiency.</span></li>
              <li><i class="bi bi-check2-all"></i> <span>Creative branding and marketing to boost visibility.</span></li>
            </ul>
            <p>
              At SMI SOFTS, we deliver innovative solutions that help your business thrive. Our expert team crafts seamless IT, software, and marketing services designed to maximize efficiency, boost growth, and create measurable impact. We focus on results, so you can focus on success.
            </p>
          </div>
        </div>

      </div>

  `;
}

// Testimonials Section
if (document.querySelector(".testimonials")) {
  document.querySelector(".testimonials").innerHTML = `
   <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Testimonials</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    <!-- End Section Title -->
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div
        class="swiper init-swiper"
        data-speed="600"
        data-delay="5000"
        data-breakpoints='{ "320": { "slidesPerView": 1, "spaceBetween": 40 }, "640": { "slidesPerView": 3, "spaceBetween": 40 } }'>
        <script type="application/json" class="swiper-config">
          {
            "loop": true,
            "speed": 600,
            "autoplay": {
              "delay": 5000
            },
            "slidesPerView": "auto",
            "pagination": {
              "el": ".swiper-pagination",
              "type": "bullets",
              "clickable": true
            },
            "breakpoints": {
              "320": {
                "slidesPerView": 1,
                "spaceBetween": 40
              },
              "640": {
                "slidesPerView": 3,
                "spaceBetween": 20
              }
            }
          }
        </script>
        <div class="swiper-wrapper" data-itemCount="3">
          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span
                  >SMI Softs delivered outstanding digital marketing
                  services, including highly effective Meta Ads campaigns,
                  for
                  <span class="testimonial-company-name">
                    AeroShine Duct Cleaning</span>
                  Service. Their expert team also crafted a professional and
                  user-friendly website through their design and development
                  services, contributing significantly to AeroShine's online
                  presence. Professional, reliable, and highly
                  recommended!</span
                >
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/Aeroshine.png"
                class="testimonial-img"
                alt=""
              />
              <h3>Farhan Ali</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </div>
          <!-- End testimonial item -->
          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span
                  >Export tempor illum tamen malis malis eram quae irure
                  esse labore quem cillum quid malis quorum velit fore eram
                  velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.</span
                >
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/testimonials-2.jpg"
                class="testimonial-img"
                alt=""
              />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </div>
          <!-- End testimonial item -->
          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span
                  >Enim nisi quem export duis labore cillum quae magna enim
                  sint quorum nulla quem veniam duis minim tempor labore
                  quem eram duis noster aute amet eram fore quis sint
                  minim.</span
                >
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/testimonials-3.jpg"
                class="testimonial-img"
                alt=""
              />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
            </div>
          </div>
          <!-- End testimonial item -->
          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span
                  >Fugiat enim eram quae cillum dolore dolor amet nulla
                  culpa multos export minim fugiat dolor enim duis veniam
                  ipsum anim magna sunt elit fore quem dolore labore illum
                  veniam.</span
                >
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/testimonials-4.jpg"
                class="testimonial-img"
                alt=""
              />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
            </div>
          </div>
          <!-- End testimonial item -->
          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span
                  >Quis quorum aliqua sint quem legam fore sunt eram irure
                  aliqua veniam tempor noster veniam sunt culpa nulla illum
                  cillum fugiat legam esse veniam culpa fore nisi cillum
                  quid.</span
                >
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/testimonials-5.jpg"
                class="testimonial-img"
                alt=""
              />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
            </div>
          </div>
          <!-- End testimonial item -->
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  `;
}

if (document.querySelector(".services")) {
  document.querySelector(".services").innerHTML = `
    <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
    <!-- End Section Title -->

    <div class="container">
      <div class="row gy-4">
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="100">
          <div class="service-item item-red position-relative">
            <div class="icon">
              <svg
                width="100"
                height="100"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="none"
                  stroke-width="0"
                  fill="#f5f5f5"
                  d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                ></path>
              </svg>
              <i class="bi bi-activity"></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>Web Development</h3>
            </a>
            <p>
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et
              consequatur.
            </p>
          </div>
        </div>
        <!-- End Service Item -->
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="200">
          <div class="service-item item-red position-relative">
            <div class="icon">
              <svg
                width="100"
                height="100"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="none"
                  stroke-width="0"
                  fill="#f5f5f5"
                  d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                ></path>
              </svg>
              <i class="bi bi-broadcast"></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>Eosle Commodi</h3>
            </a>
            <p>
              Ut autem aut autem non a. Sint sint sit facilis nam iusto
              sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
            </p>
          </div>
        </div>
        <!-- End Service Item -->
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="300">
          <div class="service-item item-red position-relative">
            <div class="icon">
              <svg
                width="100"
                height="100"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="none"
                  stroke-width="0"
                  fill="#f5f5f5"
                  d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                ></path>
              </svg>
              <i class="bi bi-easel"></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>Ledo Markt</h3>
            </a>
            <p>
              Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
              Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
            </p>
          </div>
        </div>
        <!-- End Service Item -->
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="400">
          <div class="service-item item-red position-relative">
            <div class="icon">
              <svg
                width="100"
                height="100"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="none"
                  stroke-width="0"
                  fill="#f5f5f5"
                  d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                ></path>
              </svg>
              <i class="bi bi-bounding-box-circles"></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>Asperiores Commodit</h3>
            </a>
            <p>
              Non et temporibus minus omnis sed dolor esse consequatur.
              Cupiditate sed error ea fuga sit provident adipisci neque.
            </p>
            <a href="service-details.html" class="stretched-link"></a>
          </div>
        </div>
        <!-- End Service Item -->
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="500">
          <div class="service-item item-red position-relative">
            <div class="icon">
              <svg
                width="100"
                height="100"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="none"
                  stroke-width="0"
                  fill="#f5f5f5"
                  d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
                ></path>
              </svg>
              <i class="bi bi-calendar4-week icon"></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>Velit Doloremque</h3>
            </a>
            <p>
              Cumque et suscipit saepe. Est maiores autem enim facilis ut
              aut ipsam corporis aut. Sed animi at autem alias eius labore.
            </p>
            <a href="service-details.html" class="stretched-link"></a>
          </div>
        </div>
        <!-- End Service Item -->
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="600">
          <div class="service-item item-red position-relative">
            <div class="icon">
              <svg
                width="100"
                height="100"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="none"
                  stroke-width="0"
                  fill="#f5f5f5"
                  d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
                ></path>
              </svg>
              <i class="bi bi-chat-square-text"></i>
            </div>
            <a href="service-details.html" class="stretched-link">
              <h3>Dolori Architecto</h3>
            </a>
            <p>
              Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
              neque non et debitis iure. Corrupti recusandae ducimus enim.
            </p>
            <a href="service-details.html" class="stretched-link"></a>
          </div>
        </div>
        <!-- End Service Item -->
      </div>
    </div>   
  `;
}

// client Section
if (document.querySelector(".clients")) {
  document.querySelector(".clients").innerHTML = `
       <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-xl-2 col-md-3 col-6 client-logo">
            <a href="https://aeroshineduct.com/"><img src="assets/img/clients/aeroshine_duct_logo.png" class="img-fluid" alt=""></a>
          </div><!-- End Client Item -->

          <div class="col-xl-2 col-md-3 col-6 client-logo">
            <a href="https://innovobay.com/"><img src="assets/img/clients/innovobay_logo.png" class="img-fluid" alt=""></a>
          </div><!-- End Client Item -->
          
          <div class="col-xl-2 col-md-3 col-6 client-logo">
            <a href="https://regularhost.com/"><img src="assets/img/clients/regular-host" class="img-fluid" alt=""></a>
          </div><!-- End Client Item -->

        </div>

      </div>
  `;
}

// stats Section
if (document.querySelector(".stats")) {
  document.querySelector(".stats").innerHTML = `
       <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1" class="purecounter"></span>
              <p>Clients</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" class="purecounter"></span>
              <p>Projects</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="1" class="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="6" data-purecounter-duration="1" class="purecounter"></span>
              <p>Workers</p>
            </div>
          </div><!-- End Stats Item -->

        </div>

      </div>
  `;
}

// Team Section
if (document.querySelector(".team")) {
  document.querySelector(".team").innerHTML = `
      <!-- Section Title -->
      <!--<div id="teamheading" class="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>--> <!-- End Section Title -->

      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member">
              <div class="member-img">
                <img src="assets/img/team/ibraheem.png" class="img-fluid" alt="">
                <div class="social">
                  <a href="https://www.facebook.com/profile.php?id=61577930220212"><i class="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/smibraheem16/"><i class="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/smi16/"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Syed Muhammad Ibraheem</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div><!-- End Team Member -->
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member">
              <div class="member-img">
                <img src="assets/img/team/male.png" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Muhammad Umer Farooq</h4>
                <span>Finance Manager</span>
              </div>
            </div>
          </div><!-- End Team Member -->
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member">
              <div class="member-img">
                <img src="assets/img/team/abdur_Rehman.png" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Abdur Rehman</h4>
                <span>Senior Developer</span>
              </div>
            </div>
          </div><!-- End Team Member -->
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member">
              <div class="member-img">
                <img src="assets/img/team/Amna_Shahid.png" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Amna Shahid</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div><!-- End Team Member -->
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member">
              <div class="member-img">
                <img src="assets/img/team/female.png" class="img-fluid" alt="">
                <div class="social">
                  <a href="https://www.facebook.com/MaryamBibiOfficial"><i class="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/digitalbymaryambibi"><i class="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/maryam-bibi-858904336"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Maryam Bibi</h4>
                <span>Marketing Manager</span>
              </div>
            </div>
          </div><!-- End Team Member -->

        </div>

      </div>`;
}

// Contact Section
if (document.querySelector(".contact")) {
  document.querySelector(".contact").innerHTML = `
      <div class="container section-title" data-aos="fade-up" id="cont_heading">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="mb-4 hidden" id="maphidden" data-aos="fade-up" data-aos-delay="200">
          <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6249228287566!2d67.16220575552589!3d24.876656876767974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b19914cac05997%3A0x924446a3bb37ae3!2sSMI%20SOFTS!5e0!3m2!1sen!2s!4v1728140218332!5m2!1sen!2s" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div><!-- End Google Maps -->

        <div class="row gy-4">

          <div class="col-lg-4">
            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i class="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>SMI SOFTS, Green Town, Karachi, Pakistan</p>
              </div>
            </div>

            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i class="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+92 301 024 7722</p>
              </div>
            </div><!-- End Info Item -->

             <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i class="bi bi-whatsapp flex-shrink-0"></i>
              <div>
                <h3>Whatsapp</h3>
                <p>+44 7917 317 216</p>
              </div>
            </div><!-- End Info Item -->

            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i class="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@smisofts.com</p>
              </div>
            </div>

          </div>

          <div class="col-lg-8">
            <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-4">

                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Your Name" required="">
                </div>

                <div class="col-md-6 ">
                  <input type="email" class="form-control" name="email" placeholder="Your Email" required="">
                </div>

                <div class="col-md-12">
                  <input type="text" class="form-control" name="subject" placeholder="Subject" required="">
                </div>

                <div class="col-md-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>`;
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
          <p>We help businesses grow, get noticed, and reach their full potential with complete 360° strategies crafted in clear, human-friendly language for real, lasting impact.</p>
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
