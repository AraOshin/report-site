import React from 'react';
import PropTypes from 'prop-types';
import LineChart from '../Visualizations/LineChart';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'FOCUS ON THE CENTRAL EASTSIDE SWEEPS';

const SweepsCES = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow={false}
    disableReadMore
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={(

      <LineChart
        dataContext="sweepsWeeklyTargetAreaData"
        legendLabel="Number of Campsite Sweeps Per Week for Central Eastside (OPC Weekly Reports)"
        lineColor="#E0C545"
        toolTipLabel="Sweeps"
      />

    )}
    subsectionId={HEADING_TEXT}
    headingText={HEADING_TEXT}
    subHeadingText="Reporting Sweep-Evictions on the Central Eastside In Response to the Enhanced Service District"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">To understand sweep-evictions at a neighborhood scale we subset the sweep-evictions to within the boundaries of Hosford-Abernethy, Buckman, and Kerns. These are the neighborhoods that contain the 77-block area of the Central Eastside Industrial District, several areas of which are swept on a regular basis, as part of a City-described "maintenance project" that refers to sweeps that regularly occur in a single location. The Central Eastside Industrial Council is proposing a self-imposed tax to create an "Enhanced Service District" that they are requesting approval for on January 17th.</div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div />
      </div>
    )}
  />
);

SweepsCES.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};


export default SweepsCES;
