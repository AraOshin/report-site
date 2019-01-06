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
        <div className="paragraph">
          To understand sweep-evictions at a neighborhood scale we zoom in to examine how they affect our unsheltered neighbors on a block by block basis. This represents all of the sites within the boundaries of Hosford-Abernethy, Buckman, and Kerns that have been swept, but many of the same sights have been swept repeatedly, week after week (see the map above for a visual idea of the density of campsite sweeps over time). If the 77-block area of the Central Eastside Industrial Council gets its "Enhanced Service District" approved on January 17th we expect the number of calls to the City for sweeps will go up, as has happened in so many other of these districts (
<a href="https://poseidon01.ssrn.com/delivery.php?ID=170124119105002025099118124001079077122024024079020086078021123005121121108105121081017021040022038009060126027100094112000025055090056092048081112096001099027111029086011066083096023072107086095117025100004080015111105001098067116000105122117066123&EXT=pdf">Selben, 2018</a>
          ).
        </div>
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
