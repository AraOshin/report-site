import React from 'react';
import PropTypes from 'prop-types';
import Subsection from '../Layout/Subsection';
import IntroPie from '../Visualizations/IntroPie';


const Intro = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow={false}
    toggleExpandedSubsection={toggleExpandedSubsection}
    disableSticky
    vis={(
      <div>
        <img className="responsive-img" src="./static/01_navybar_01.png" alt="Sweeps Timeline" />
      </div>
    )


    }
    headingText="Intro Section Heading Intro Section Heading Intro Section Heading"
    subHeadingText="Intro Section SubHeading Intro Section SubHeading Intro Section SubHeading Intro Section SubHeading"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">
          This diagram is a comparison of requests to services for policing in 2017 and 2018.
        </div>
        <div className="paragraph">
          Pellentesque habitant hyperlink style senectus et netus et malesuada fames ac turpis egestas. Cras velit elit, finibus eget mattis sit amet, maximus vitae urna. Duis a nulla arcu. Aenean ut magna sed tellus vehicula euismod. Vivamus aliquam in diam sit amet feugiat. Curabitur id neque sit amet libero aliquet aliquam tempor dapibus felis.
        </div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">
          This diagram is a comparison of requests to services for policing in 2017 and 2018.
        </div>
        <div className="paragraph">
          Pellentesque habitant hyperlink style senectus et netus et malesuada fames ac turpis egestas. Cras velit elit, finibus eget mattis sit amet, maximus vitae urna. Duis a nulla arcu. Aenean ut magna sed tellus vehicula euismod. Vivamus aliquam in diam sit amet feugiat. Curabitur id neque sit amet libero aliquet aliquam tempor dapibus felis.
        </div>
      </div>
    )}
  />
);


Intro.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};


export default Intro;
