"use client";
import React, { useEffect } from 'react';
import { LeftShapeSVG, RightShapeSVG } from '../SVG/BannerShapes';
export const HomeAboutUs = () => { 

  return (
    <section className="section-about padding-tb-50">
      <div className="container">
        <div className="row mb-minus-24">
          <div
            className="col-lg-6 mb-24 order-md-2"            
          >
            <div className="rx-about-img">
              <img
                src="assets/dev-img/about-us.png"
                alt="about"
                className="rx-white-img"
              />
              <div className="rx-rounded-circle">
                <a href="#">
                  <svg viewBox="0 0 100 100" width={100} height={100}>
                    <defs>
                      <path
                        id="circle"
                        d=" M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      ></path>
                    </defs>
                    <text>
                      <textPath xlinkHref="#circle">
                        About Us - About Us - About -
                      </textPath>
                    </text>
                  </svg>
                  <div className="inner-contact">
                    <i className="ri-arrow-right-up-line" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 mb-24 order-md-1"          
          >
            <div className="rx-about-contact">
              <div className="rx-banner about-homeb rx-banner-effects">
                
                <p className="mb-2">
                  <LeftShapeSVG />
                  The Elegance
                  <RightShapeSVG />
                </p>
                
                <h1 className="home-about">
                  Best Hotel in Varanasi near <span>Railway Station</span>
                </h1>
              </div>
              <div className="inner-contact">
                <p>
                  Discover the essence of elegance and luxury at Hotel Elegance in
                  Varanasi, where every stay is a blend of comfort, convenience, and
                  unparalleled hospitality. Situated just 6 kilometers from the
                  heart of Varanasi, and 1 kilometer from Varanasi Station, our 
                  <strong>Hotel in Varanasi</strong> offers a harmonious retreat for
                  both leisure and business travelers. Whether you're seeking{" "}
                  <strong>the best hotel in Varanasi</strong>, a charming hotel in
                  the city, or a convenient option near DLW Varanasi, Hotel Elegance
                  caters to your every need.
                </p>
                <p>
                  As the Best hotel in Varanasi, Hotel Elegance is dedicated to
                  providing you with the highest level of comfort, service, and
                  hospitality.
                </p>
                <div className="rx-about-inner-box">
                  <div className="row mb-minus-24">
                    <div className="col-sm-4 col-12 rx-575-50 mb-24">
                      <div className="rx-about-box" data-aos="zoom-in" data-aos-delay="300">
                        <h5>Unmatched Hospitality</h5>
                        {/* <p>Awards</p> */}
                      </div>
                    </div>
                    <div className="col-sm-4 col-12 rx-575-50 mb-24 mt-24">
                      <div className="rx-about-box" data-aos="zoom-in" data-aos-delay="400">
                        <h5>Close to Key Destinations</h5>
                        {/* <p>Visitors</p> */}
                      </div>
                    </div>
                    <div className="col-sm-4 col-12 rx-575-50 mb-24">
                      <div className="rx-about-box" data-aos="zoom-in" data-aos-delay="500">
                        <h5>For Family & Business both</h5>
                        {/* <p>Events</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
