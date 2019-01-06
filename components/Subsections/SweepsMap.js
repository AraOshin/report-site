import React from 'react';
import PropTypes from 'prop-types';
import SweepsMapImage from '../Visualizations/SweepsMapImage';
import Subsection from '../Layout/Subsection';


const SweepsMap = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow
    disableReadMore
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={<SweepsMapImage />}
    headingText="WHAT IS THE CITY-WIDE MAGNITUDE OF SWEEP-EVICTIONS?"
    subHeadingText="Using Maps to Visualize the Distribution of Sweep-Evictions"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">In 2017, our city evicted 1,377 camps, and from January through October of 2018, 1,845 camps were evicted. Use the menu below to visualize the magnitude and location of sweeps across different neighborhoods in Portland (pink: 2016, yellow: 2017, orange: 2018).</div>
      </div>
    )}
    expandedText={<div />}
  />
);

SweepsMap.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};


export default SweepsMap;
