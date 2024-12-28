// Assets > Logo
import Logo from './assets/logo.png';

// Assets > Houses
import House1 from './assets/houses/house1.jpg';
import House2 from './assets/houses/house2.jpg';
import House3 from './assets/houses/house3.jpg';

// Assets > Icons
import Icon1 from './assets/icon1.png';
import Icon2 from './assets/icon2.png';
import Icon3 from './assets/icon3.png';

// Assets > Gallery
import Gallery from './assets/gallery.png';

// Assets > CTA
import CTA_Image from './assets/cta-image.jpg';

// CSS
import './App.css';

function App() {

  return (

    <div className="App">

      <header className="Header">
        <div className="container">

          <div className="Header-Left">
            <img src={Logo} className="Header-Logo" />
            <h1>Empress</h1>
          </div> {/* Header Left */}


          <div className="Header-Right">

            <nav className="Header-Desktop-Navigation">
              <a href="#services">Services</a>
              <a href="#services">About</a>
              <a href="#services">Projects</a>
              <a href="#services">Testimonials</a>
              <a className="Header-Dsk-Nav-Custom" href="#services">Contact</a>
            </nav>

          </div> {/* Header Right */}

        </div> {/* Container */}
      </header> {/* Header */}

      <div className="Top-Banner-CTA">
        <div className="container">

          <img src={House1} className="Top-Banner-Img" />

          <div className="Top-Banner-Left">
            <h2>
              Want To Get The <span>Most Return</span><br />
              From Your <span>Property</span>?
            </h2> {/* CTA Main Text */}

            <ul>
              <li>— ROI Consultation</li>
              <li>— Marketing Services</li>
              <li>— Design</li>
            </ul> {/* Benefits List */}

            <div className="Top-Banner-CTA-Box">
              <input type="email" placeholder="E-mail" name="email" />

              <input type="submit" name="cta-action" value="Submit" />
            </div> {/* CTA Input */}

          </div> {/* Top Banner Left */}

        </div> {/* Container */}
      </div> {/* Top Banner CTA */}

      <div className="Not-Your-Average">
        <div className="container">

          <h2>NOT YOUR AVERAGE REALTOR</h2>

          <p>
            Realtor Empress has an eye for seeing a property’s<br/>
            potential, coordinating design, and effectively marketing to<br/>
            get homeowners top dollar on their sale.
          </p>

          <div className="line1"></div>
          <div className="line2"></div>

          <img className="segmental-line-house1" src={House2} />
          <img className="segmental-line-house2" src={House3} />

        </div>
      </div> {/* Not Your Average */}

      <div className="Why-Choose-Us">
        <div classname="container">

          <h2>Why Choose Us?</h2>

          <div className="Why-Choose-Us-Wrapper">

            <div className="Why-Choose-Us-Box">
              <div className="why-text">
                <h3>Potential ROI</h3>
                <p>Whether you are looking to buy a fixer upper or renovate your current home for sale, We will walk you through potential returns for projects. Amet sint ullamco eiusmod quis non dolor deserunt culpa et reprehenderit do tempor quis. Cillum minim elit veniam occaecat et eu voluptate consectetur voluptate aute incididunt nisi deserunt. Lorem eu ipsum eu amet consectetur dolore eu laboris elit non est.</p>
              </div>

              <div className="why-img">
                <img src={Icon1} />
              </div>
            </div> {/* Box */}

            <div className="Why-Choose-Us-Box">
              <div className="why-text">
                <h3>Design</h3>
                <p>Our background in interior design makes the perfect guide through your design options and coordinating contractors to complete the home upgrade Non aliquip cillum enim magna veniam. Cillum nostrud laboris id nulla pariatur voluptate aliquip mollit. Ut do commodo commodo duis.</p>
              </div>

              <div className="why-img">
                <img src={Icon2} />
              </div>
            </div> {/* Box */}

            <div className="Why-Choose-Us-Box">
              <div className="why-text">
                <h3>Marketing</h3>
                <p>Staging consultation, professional photos and a sophisticated digital marketing plan accompany every listing to reach today’s buyers Nostrud nisi Lorem mollit et officia culpa ex velit eiusmod ad excepteur. Nisi culpa sit occaecat anim nulla cillum sunt mollit aliquip proident. Commodo voluptate labore consectetur commodo.</p>
              </div>

              <div className="why-img">
                <img src={Icon3} />
              </div>
            </div> {/* Box */}

          </div> {/* Wrapper */}

        </div>
      </div> {/* Why Choose Us */}

      <div className="Houses-Gallery">
        <div className="container">

          <img src={Gallery} />

          <div className="overlay"></div>

          <p>
            We know what buyers are looking for and suggestions<br/>
            projects that will bring her clients Top Dollar for the sale of<br/>
            their home.
          </p>

        </div> {/* Container */}
      </div> {/* Houses Gallery */}

      <div className="About-Us-Testimonials">
        <div className="container">

          <div className="About-Us">

            <h2>About Us</h2>
            <p>
              Fourteen years of experience in real estate, excellent customer service and a commitment to work hard, listen and follow through. We provide quality service to build relationships with clients and more importantly, maintain those relationships by communicating effectively.<br/>
              <br/>
              Id exercitation sunt deserunt qui qui eu quis nostrud nisi. Irure nostrud excepteur nostrud nostrud aute proident id irure dolore. Est veniam excepteur ullamco ex Lorem ipsum consectetur.
              Cupidatat do irure pariatur et labore. Officia Lorem culpa excepteur ipsum voluptate. Sint eu veniam incididunt quis cupidatat ut ut. Nostrud fugiat non quis elit esse Lorem ipsum eu labore eiusmod reprehenderit officia aliqua aliqua.<br/>
              <br/>
              — Realtor Empress
            </p>

          </div> {/* About Us */}


          <div className="Testimonials">
            <h2>Testimonials</h2>

            <div className="Testimonial-Box">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper mi eu massa mattis vestibulum. Mauris orci ex, porta at velit ut, posuere fermentum massa. Suspendisse et magna nunc.”<br/>
                — Clark
              </p>
            </div>

            <hr />
            
            <div className="Testimonial-Box">
              <p>
                “Vivamus elit orci, commodo et volutpat at, rhoncus eget ipsum. Suspendisse vulputate mollis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.”<br/>
                — Paul
              </p>
            </div>
          </div> {/* Testimonials */}

        </div> {/* Container */}
      </div> {/* About Us Testimonials */}

      <div className="CTA-Image">
        <div className="container">

          <img src={CTA_Image} />

          <div className="overlay"></div>

          <p>
            Learn more about Our Listing process, as well as our<br/>
            additional staging and design work
          </p>

          <a href="#learn-more">Learn More</a>

        </div> {/* Container */}
      </div> {/* CTA Image */}

      <footer>
        <div className="container">

          <div className="footer-nav">
            <a href="#services">Services</a>
            <a href="#services">About</a>
            <a href="#services">Projects</a>
            <a href="#services">Testimonials</a>
          </div> {/* Footer Nav */}

          <hr />

          <div className="social-medias">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-telegram"></i>
            <i class="fa-solid fa-envelope"></i>
            <i class="fa-solid fa-phone"></i>
          </div>

          <hr />

          <div className="back-to-top">
            <a href="#backToTop" id="backToTop"><i class="fa-solid fa-chevron-up"></i></a>
          </div>

        </div> {/* Container */}

        <div className="SubFooter">

          <img src={Logo} className="Header-Logo" />
          <h1>Empress</h1>

        </div> {/* Sub Footer */}
      </footer> {/* Footer */}

    </div> // App

  );

}

export default App;
