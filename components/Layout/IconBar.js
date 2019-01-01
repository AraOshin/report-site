
import React from 'react';
import PropTypes from 'prop-types';
import { Sticky } from 'react-sticky';
import Tent from '../Icons/NewTent';
import Police from '../Icons/Police';
import Hygine from '../Icons/Hygine';
import Waste from '../Icons/Waste';


const shouldTransform = distanceFromTop => distanceFromTop <= 50;
const getIconClassName = transform => `splash-footer-icon ${transform ? ' scrolled-splash-footer-icon' : ''}`;


const IconBar = ({ active, handleIconClick, handleScroll }) => (
  <Sticky>
    {({ style, distanceFromTop }) => {
      const transform = shouldTransform(distanceFromTop);
      const distanceFromTopValue = distanceFromTop;
      if (distanceFromTop) handleScroll(distanceFromTopValue);

      return (
        <div
          style={style}
          className={`splash-footer ${transform && 'scrolled-splash-footer'}`
          }
        >
          <div className={`splash-footer-icons ${transform ? 'scrolled-splash-footer-icons' : ''}`}>
            <div
              className={getIconClassName(transform)}
              onClick={() => handleIconClick('campsites-section')}
            >
              <Tent
                className="icon"
                fill={active === 'campsites-section' ? '#2FD89F' : '#4992D5'}
              />
              {!transform && (
                <span
                  className="icon-label"
                  style={{ color: '#2FD89F' }}
                >
                  Campsites
                </span>
              )}
              <div className="icon-line" />
            </div>

            <div
              className={getIconClassName(transform)}
              onClick={() => handleIconClick('police-section')}
            >
              <Police
                className="icon"
                fill={active === 'police-section' ? '#2FD89F' : '#4992D5'}
              />
              {!transform && <span className="icon-label"> Police Action </span>}
              <div className="icon-line" />
            </div>
            <div
              className={getIconClassName(transform)}
              onClick={() => handleIconClick('hygiene-section')}
            >
              <Hygine
                className="icon"
                fill={active === 'hygiene-section' ? '#2FD89F' : '#4992D5'}
              />
              {!transform && <span className="icon-label"> Hygiene Access </span>}
              <div className="icon-line" />
            </div>
            <div
              className={getIconClassName(transform)}
              onClick={() => handleIconClick('waste-section')}
            >
              <Waste
                className="icon"
                fill={active === 'waste-section' ? '#2FD89F' : '#4992D5'}
              />
              {!transform && <span className="icon-label">Waste Disposal </span>}
              <div className="icon-line" />
            </div>
          </div>
        </div>
      );
    }}

  </Sticky>
);

IconBar.propTypes = {
  active: PropTypes.string,
  handleIconClick: PropTypes.func,
  handleScroll: PropTypes.func,
};


export default IconBar;
