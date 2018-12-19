
import React from 'react';
import '../pages/newStyles.css';

const Splash = ({ scrolled }) => (
  <div className="splash">
    <div className="splash-top" />
    <div className="splash-banner" />
    <div className={`splash-footer ${scrolled && 'scrolled-splash-footer'}`}>

      <div className={`splash-footer-icons ${scrolled && 'scrolled-splash-footer-icons'}`}>
        <div className={scrolled ? 'scrolled-splash-footer-icon' : 'splash-footer-icon'}>
            <i className="fas fa-campground" />
            {!scrolled && <span className="icon-label"> campsites </span>}
        </div>
          <div className={scrolled ? 'scrolled-splash-footer-icon' : 'splash-footer-icon'}>
            <i className="fas fa-taxi" />
            {!scrolled && <span className="icon-label"> policing </span>}
          </div>
          <div className={scrolled ? 'scrolled-splash-footer-icon' : 'splash-footer-icon'}>
            <i className="fas fa-tint" />
            {!scrolled && <span className="icon-label"> Hygiene Access </span>}
          </div>
          <div className={scrolled ? 'scrolled-splash-footer-icon' : 'splash-footer-icon'}>
            <i className="fas fa-trash" />
            {!scrolled && <div className="icon-label">Waste Disposal Access</div>}
          </div>
      </div>
    </div>
  </div>
);

export default Splash;
