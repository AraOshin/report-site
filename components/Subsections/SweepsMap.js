import React from 'react';
import PropTypes from 'prop-types';
import SweepsMapImage from '../Visualizations/SweepsMapImage';
import Subsection from '../Layout/Subsection';


const SweepsMap = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={<SweepsMapImage />}
    headingText="WHAT IS THE CITY-WIDE IMPACT OF SWEEPS?"
    subHeadingText="Portland Wide with Option to Select Neighborhood"
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

SweepsMap.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};


export default SweepsMap;
