import React from 'react';
import PropTypes from 'prop-types';
import Subsection from '../Layout/Subsection';


const SweepTimeline = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow={false}
    toggleExpandedSubsection={toggleExpandedSubsection}
    disableSticky
    vis={
      (
        <div>
          <img className="responsive-img" src="./static/picture.png" alt="Sweeps Timeline" />
        </div>
      )}
    expandedVis={
      (
        <div>
          <img className="responsive-img" src="./static/picture.png" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/picture.png" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/picture.png" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/picture.png" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/picture.png" alt="Sweeps Timeline" />
        </div>
      )}
    headingText="Campsite Sweep in Photos"
    subHeadingText="Sweeps Cause Trauma and are Bad for the Environment"
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


SweepTimeline.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};


export default SweepTimeline;
