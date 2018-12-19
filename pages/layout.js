import React, { Component } from 'react';
import Head from '../components/head';
import './newStyles.css';
import { StickyContainer, Sticky } from 'react-sticky';

const shouldTransform = distanceFromTop => distanceFromTop <= 50;
const getIconClassName = transform => `splash-footer-icon ${transform && 'scrolled-splash-footer-icon'}`;

const Layout = () => (
  <div>
    <Head title="Home" />


    <div className="splash">
      <div className="splash-top" />
      <div
        className="splash-banner"
      />
    </div>
    <StickyContainer className="site-container">
      <Sticky>
        {({ style, distanceFromTop, ...rest }) => {
          const transform = shouldTransform(distanceFromTop);

          return (
            <div
              style={style}
              className={`splash-footer ${transform && 'scrolled-splash-footer'}`}

            >
              {console.log(rest)}
              <div className={`splash-footer-icons ${transform && 'scrolled-splash-footer-icons'}`}>
                <div className={getIconClassName(transform)}>
                  <i className="fas fa-campground" />
                  {!transform && <span className="icon-label"> campsites </span>}
                </div>
                <div className={getIconClassName(transform)}>
                  <i className="fas fa-taxi" />
                  {!transform && <span className="icon-label"> policing </span>}
                </div>
                <div className={getIconClassName(transform)}>
                  <i className="fas fa-tint" />
                  {!transform && <span className="icon-label"> Hygiene Access </span>}
                </div>
                <div className={getIconClassName(transform)}>
                  <i className="fas fa-trash" />
                  {!transform && <div className="icon-label">Waste Disposal Access</div>}
                </div>
              </div>
            </div>
          );
        }}

      </Sticky>


      <div
        className="main-container"
      >

        <div className="report" />
        <div className="about-banner">
          <img className="responsive-img" src="/static/about-img.png" />
        </div>
        <div className="footer"> Footer </div>
        <div className="about-banner">
          <img className="responsive-img" src="/static/about-img.png" />
        </div>
        <div className="footer"> Footer </div>


      </div>

    </StickyContainer>
  </div>

);


export default Layout;
