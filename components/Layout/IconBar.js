
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
    active: 'campsites',
  }

  componentDidMount = () => {
    const getpositionFromBottom = id => document.getElementById(id).getBoundingClientRect().bottom;

    const getpositionFromTop = id => Math.abs(Math.round(document.getElementById(id).offsetTop));

    this.campsites = getpositionFromTop('campsites-section');
    this.police = getpositionFromTop('police-section') - 1 ;
    this.hygiene = getpositionFromTop('hygiene-section') - 1;
    this.waste = getpositionFromTop('waste-section') - 1;
    console.log(this.campsites, this.police, this.hygiene, this.waste);
  }

  hanldleClick = (id) => {
    const rect = document.getElementById(id).getBoundingClientRect();
    // { console.log(sectionPosition); }
    const sectionPosition = document.getElementById(id).offsetTop;


    +console.log('rect bottom', Math.round(rect.bottom));
    console.log(this.state.positionFromBottom);

    window.scrollTo({
      top: sectionPosition - 75,
      behavior: 'smooth',
    });
  }

  handleScroll = (distanceFromTop) => {
    const reportScrollPosition = Math.abs(Math.round(distanceFromTop) - this.campsites);

    let activeSection = 'campsites';

    if (reportScrollPosition >= this.waste) {
      activeSection = 'waste';
    } else if (reportScrollPosition >= this.hygiene) {
      activeSection = 'hygiene';
    } else if (reportScrollPosition >= this.police) {
      activeSection = 'police';
    } else {
      activeSection = 'campsites';
    }

    if (this.state.active !== activeSection) this.setState({ active: activeSection });
  }


  render() {
    return (
      <Sticky>
        {({ style, distanceFromTop, ...rest }) => {
          const transform = shouldTransform(distanceFromTop);
          this.handleScroll(distanceFromTop);

          return (
            <div
              style={style}
              className={`splash-footer ${transform && 'scrolled-splash-footer'}`}
            >
              <div className={`splash-footer-icons ${transform ? 'scrolled-splash-footer-icons' : ''}`}>
                <div
                  className={getIconClassName(transform)}
                  onClick={() => this.hanldleClick('campsites-section')}
                >
                  <Tent fill={this.state.active === 'campsites' ? '#2FD89F' : '#4992D5'} />
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
                  onClick={() => this.hanldleClick('police-section')}
                >
                  <Police fill={this.state.active === 'police' ? '#2FD89F' : '#4992D5'} />
                  {!transform && <span className="icon-label"> Police Action </span>}
                  <div className="icon-line" />
                </div>
                <div
                  className={getIconClassName(transform)}
                  onClick={() => this.hanldleClick('hygiene-section')}
                >
                  <Hygine fill={this.state.active === 'hygiene' ? '#2FD89F' : '#4992D5'} />
                  {!transform && <span className="icon-label"> Hygiene Access </span>}
                  <div className="icon-line" />
                </div>
                <div
                  className={getIconClassName(transform)}
                  onClick={() => this.hanldleClick('waste-section')}
                >
                  <Waste fill={this.state.active === 'waste' ? '#2FD89F' : '#4992D5'} />
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
