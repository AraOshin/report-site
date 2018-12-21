
import React, { Component } from 'react';

import { Sticky } from 'react-sticky';
import Tent from '../Icons/Tent';
import Police from '../Icons/Police';
import Hygine from '../Icons/Hygine';
import Waste from '../Icons/Waste';

const shouldTransform = distanceFromTop => distanceFromTop <= 50;
const getIconClassName = transform => `splash-footer-icon ${transform ? ' scrolled-splash-footer-icon' : ''}`;


class IconBar extends Component {
  state = {
    active: '',
  }

  componentDidMount = () => {
    const getpositionFromBottom = id => document.getElementById(id).getBoundingClientRect().bottom;

    this.campsites = getpositionFromBottom('campsites-section');
    this.police = getpositionFromBottom('police-section');
    this.hygiene = getpositionFromBottom('hygiene-section');
    this.waste = getpositionFromBottom('waste-section');
    console.log(this.campsites, this.police, this.hygiene, this.waste);
  }

  hanldleClick = (id) => {
    const rect = document.getElementById(id).getBoundingClientRect();
    // { console.log(sectionPosition); }
    const sectionPosition = document.getElementById(id).offsetTop;

    const print = document.getElementById(id).offsetTop

      + console.log('rect bottom', Math.round(rect.bottom));
    console.log(this.state.positionFromBottom);

    window.scrollTo({
      top: sectionPosition - 75,
      behavior: 'smooth',
    });
  }

  handleScroll = (sectionPosition, distanceFromTop) => {
    sectionPosition;
  }

  render() {
    return (
      <Sticky>
        {({ style, distanceFromTop, ...rest }) => {
          const transform = shouldTransform(distanceFromTop);

          return (
            <div
              style={style}
              className={`splash-footer ${transform && 'scrolled-splash-footer'}`}
              onScroll={this.handleScroll}
            >
              {/* {console.log('distance from bottom', Math.round(rest.distanceFromBottom) + 75)} */}
              <div className={`splash-footer-icons ${transform ? 'scrolled-splash-footer-icons' : ''}`}>
                <div
                  className={getIconClassName(transform)}
                  onClick={() => this.hanldleClick('campsites-section')}
                >
                  <Tent />
                  {!transform && (
                    <span
                      className="icon-label"
                    >
                      Campsites
                    </span>
                  )}
                  <div className="icon-line" />
                </div>

                <div
                  className={getIconClassName(transform)}
                  onClick={() => this.hanldleClick('police-section')}
                >
                  <Police />
                  {!transform && <span className="icon-label"> Police Action </span>}
                  <div className="icon-line" />
                </div>
                <div
                  className={getIconClassName(transform)}
                  onClick={() => this.hanldleClick('hygiene-section')}
                >
                  <Hygine />
                  {!transform && <span className="icon-label"> Hygiene Access </span>}
                  <div className="icon-line" />
                </div>
                <div
                  className={getIconClassName(transform)}
                  onClick={() => this.hanldleClick('waste-section')}
                >
                  <Waste />
                  {!transform && <span className="icon-label">Waste Disposal Access</span>}
                  <div className="icon-line" />
                </div>
              </div>
            </div>
          );
        }}

      </Sticky>
    );
  }
}


export default IconBar;
