import React from 'react';
import PropTypes from 'prop-types';
import LineChart from '../Visualizations/LineChart';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'THE SCOPE AND BURDEN OF CITY POLICY OF SWEEP-EVICTIONS';


const Sweeps = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow={false}
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={(

      <LineChart
        dataContext="sweepsWeeklyData"
        legendLabel=" Number of Campsite Sweeps Per Week (One Point of Contact Weekly Reports)"
        lineColor="#E36639"
        yMax={80}
        toolTipLabel="Sweeps"
      />


    )}
    subsectionId={HEADING_TEXT}
    headingText={HEADING_TEXT}
    subHeadingText="The Growth of Sweeps from 2016-2018"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">
          The City of Portland increased evictions on properties under its jurisdiction to a peak of 311 in Octobe 2017. By 2018, the number of sweeps is more constant, with at an average of 42 campsites swept per week in 2018 (January-November, at the time of writing). According to an estimate from the public campsite reports, the average number of campers involved in a single eviction is 4 residents per site. Using this data we estimate that
{' '}
          <strong>every week the</strong>
          {' '}
          <strong>City of Portland uproots an average of 168 Portland residents</strong>
          {' '}
          from their homes and communities. This translates into
{' '}
          <strong>the weekly eviction and dispossession of over 10% of the entire unsheltered homeless population in Portland</strong>
          {' '}
          <em>(</em>
          <a href="https://www.portlandmercury.com/images/blogimages/2017/10/23/1508781908-psu_2017_point-in-time_final_clean.pdf"><em>Krishnan & Elliot; 10/2017</em></a>
          <em>). </em>
        </div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">
          In addition to Portland's OPC eviction rate, the Oregon Department of Transportation has been carrying out its own campsite evictions which are not included in this data, and the City regularly counts dozens of clustered encampments in a park or along a bike trail as a single sweep-eviction. Based on this we believe
{' '}
          <strong>the true number of people evicted on a weekly basis is far higher</strong>
          {' '}
          than what we can discern from the data available to us.
        </div>
      </div>
    )}
  />
);

Sweeps.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default Sweeps;
