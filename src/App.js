import React, { Component } from "react";
import "./temp/styles/styles.css";
import imageSmallerHero from "./assets/images/hero--smaller.jpg";
import imageSmallHero from "./assets/images/hero--small.jpg";
import imageMediumHero from "./assets/images/hero--medium.jpg";
import imageLargeHero from "./assets/images/hero--large.jpg";
import imageFirstTrip from "./assets/images/first-trip.jpg";
import imageOurStart from "./assets/images/our-start.jpg";
import imageOurStartPortrait from "./assets/images/our-start-portrait.jpg";
import imageOurStartLandscape from "./assets/images/our-start-landscape.jpg";
import iconClearViewEspacees from "./assets/images/icons/clear-view-escapes.svg";
import iconStar from "./assets/images/icons/star.svg";
import iconRain from "./assets/images/icons/rain.svg";
import iconGloble from "./assets/images/icons/globe.svg";
import iconWifi from "./assets/images/icons/wifi.svg";
import iconFire from "./assets/images/icons/fire.svg";
import iconComment from "./assets/images/icons/comment.svg";
import iconTestiJane from "./assets/images/testimonial-jane.jpg";
import iconTestiJohn from "./assets/images/testimonial-john.jpg";
import iconTestiCat from "./assets/images/testimonial-cat.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={iconClearViewEspacees} alt="un icone" />
          <a className="btn" href="#">
            Get in Touch
          </a>
          <nav>
            <ul>
              <li>
                <a href="#our-beginning">Our Beginning</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="large-hero">
          <picture>
            <source srcset={imageLargeHero} media="(min-width: 1380px)" />
            <source srcset={imageMediumHero} media="(min-width: 990px)" />
            <source srcset={imageSmallHero} media="(min-width: 640px)" />
            <img
              src={imageSmallerHero}
              alt="large hero"
              className="large-hero__image"
            />
          </picture>
          <div className="large-hero__contenu-texte">
            <div className="wrapper">
              <h1 className="large-hero__titre">Your clarity.</h1>
              <h2 className="large-hero__soustitre">One trip away.</h2>
              <p className="large-hero__description">
                We create soul restoring journeys that inspire you to be you.
              </p>
              <p>
                <a className="btn btn--orange btn--large" href="#">
                  Get Started Today
                </a>
              </p>
            </div>
          </div>
        </div>

        <div id="our-beginning" className="page-section">
          <div className="wrapper">
            <h2 className="headline headline--centered headline--light headline--reduction-margin-basse">
              The first trip we planned <strong>was our own.</strong>
            </h2>
            <h3 className="headline headline--centered headline--couleur-orange headline--taille-etroite headline--light headline--augmentation-margin-basse">
              Ever since, we&rsquo;ve been working to make travel{" "}
              <strong>better for everyone.</strong>
            </h3>
            <div className="wrapper wrapper--medium wrapper--b-margin">
              <img src={imageFirstTrip} alt="Couple walking down a street." />
            </div>
            <div className="row row--gutters">
              <div className="row__medium-4 row__medium-4-larger row__b-margin-until-medium">
                <picture>
                  <source srcset={imageOurStart} media="(min-width: 1020px)" />
                  <source
                    srcset={imageOurStartPortrait}
                    media="(min-width: 800px)"
                  />

                  <img
                    src={imageOurStartLandscape}
                    alt="Our founder, Jane Doe"
                  />
                </picture>
              </div>
              <div className="row__medium-8 row__medium-8-smaller">
                <h2 className="headline headline--no-t-margin">
                  Here&rsquo;s how we got started&hellip;
                </h2>
                <div className="generic-content-container">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,{" "}
                    <a href="#">quis nostrud exercitation</a> ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
                  </p>
                  <p>
                    Duis aute irure dolor in <strong>reprehenderit in</strong>{" "}
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum velit esse cillum{" "}
                    <strong>dolore eu fugiat.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="features" className="page-section page-section--bgFeatures">
          <div className="wrapper">
            <img src={iconStar} />
            <h2>Our Features</h2>

            <img src={iconRain} />
            <h3>We&rsquo;ll Watch the Weather</h3>
            <p>
              Download our app and we&rsquo;ll send you a notice if it&rsquo;s
              about to rain in the next 20 minutes around your current location.
              A good rain can be refreshing, but sometimes you just want to stay
              dry.
            </p>

            <img src={iconGloble} />
            <h3>Global Guides</h3>
            <p>
              We&rsquo;ve scoured the entire planet for the best retreats and
              beautiful vistas. If there&rsquo;s a corner of the world you want
              to escape to we know the most scenic and inspiring locations.
            </p>

            <img src={iconWifi} />
            <h3>Wi-Fi Waypoints</h3>
            <p>
              We only send you on trips to places we can personally vouch for as
              being amazing. Which means we&rsquo;ve mapped out where local
              wi-fi spots are and marked them in our app&rsquo;s map view.
            </p>

            <img src={iconFire} />
            <h3>Survival Kit</h3>
            <p>
              Everytime you book an escape with us we send you a survival kit
              with the finest materials. The kit will allow you to setup a tent,
              start a fire, scratch your own back and lower your taxes.
            </p>
          </div>
        </div>

        <div id="testimonials">
          <img src={iconComment} />
          <h2>Real Testimonials</h2>

          <img src={iconTestiJane} />
          <h3>Jane Doe</h3>
          <h3>9 Time Escaper</h3>
          <p>
            &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.&rdquo;
          </p>

          <img src={iconTestiJohn} />
          <h3>John Smith</h3>
          <h3>4 Time Escaper</h3>
          <p>
            &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur.&rdquo;
          </p>

          <img src={iconTestiCat} />
          <h3>Cat McKitty</h3>
          <h3>6 Time Escaper</h3>
          <p>
            &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut.&rdquo;
          </p>
        </div>

        <footer>
          <p>
            Copyright &copy; 2016 Clear View Escapes. All rights reserved.{" "}
            <a className="btn btn--orange" href="#">
              Get in Touch
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
