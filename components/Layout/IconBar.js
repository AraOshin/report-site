
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
    const getpositionFromTop = id => Math.abs(Math.round(document.getElementById(id).offsetTop));

    this.campsites = getpositionFromTop('campsites-section');
    this.police = getpositionFromTop('police-section') - 1;
    this.hygiene = getpositionFromTop('hygiene-section') - 1;
    this.waste = getpositionFromTop('waste-section') - 1;
    console.log(this.campsites, this.police, this.hygiene, this.waste);
  }

  hanldleClick = (id) => {
    const sectionPosition = document.getElementById(id).offsetTop;

    window.scrollTo({
      top: sectionPosition - 75,
      behavior: 'smooth',
    });
  }

  handleScroll = (distanceFromTop) => {
    const { active } = this.state;
    const reportScrollPosition = Math.abs(Math.round(distanceFromTop) - this.campsites);

    let activeSection = 'campsites-section';

    if (reportScrollPosition >= this.waste) {
      activeSection = 'waste-section';
    } else if (reportScrollPosition >= this.hygiene) {
      activeSection = 'hygiene-section';
    } else if (reportScrollPosition >= this.police) {
      activeSection = 'police-section';
    } else {
      activeSection = 'campsites-section';
    }

    if (active !== activeSection) this.setState({ active: activeSection });
  }


  render() {
    const { active } = this.state;

    return (
      <Sticky>
        {({ style, distanceFromTop }) => {
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
                  <Tent
                    className="icon"
                    fill={active === 'campsites-section' ? '#2FD89F' : '#4992D5'} />
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
                  <Police
                    className="icon"
                    fill={active === 'police-section' ? '#2FD89F' : '#4992D5'} />
                  {!transform && <span className="icon-label"> Police Action </span>}
                  <div className="icon-line" />
                </div>
                <div
                  className={getIconClassName(transform)}
                  onClick={() => this.hanldleClick('hygiene-section')}
                >
                  <Hygine
                    className="icon"
                    fill={active === 'hygiene-section' ? '#2FD89F' : '#4992D5'} />
                  {!transform && <span className="icon-label"> Hygiene Access </span>}
                  <div className="icon-line" />
                </div>
                <div
                  className={getIconClassName(transform)}
                  onClick={() => this.hanldleClick('waste-section')}
                >
                  <Waste
                    className="icon"
                    fill={active === 'waste-section' ? '#2FD89F' : '#4992D5'} />
                  {!transform && <span className="icon-label">Waste Disposal </span>}
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
