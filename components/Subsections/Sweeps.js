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
        legendLabel="Number of Sweeps"
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
          From October 2016 to October 2017 the City of Portland increased evictions on properties under its jurisdiction to a peak of 311. By 2018, we hypothesize that funding constrained further growth in sweeps, stabilizing their number at an average of 42 campsites swept per week in 2018 (January-November, at the time of writing). According to best estimates from our public campsite reports, the average number of campers involved in a single eviction is 6 residents per site. Using this data we estimate that
{' '}
          <strong>every week the</strong>
          {' '}
          <strong>City of Portland uproots an average of 174 Portland residents</strong>
          {' '}
          from their homes and communities.
        </div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">
          More often than not this also involves seizing private property (e.g. personal mementos, life-sustaining survival gear, medications, and critical documents such as government I.D., drivers' licenses, social security cards, birth certificates and more). This translates into
{' '}
          <strong>the weekly eviction and dispossession of over 10% of the entire unsheltered homeless population in Portland</strong>
          {' '}
          <em>(</em>
          <a href="https://www.portlandmercury.com/images/blogimages/2017/10/23/1508781908-psu_2017_point-in-time_final_clean.pdf"><em>Krishnan & Elliot; 10/2017</em></a>
          <em>). </em>
          With over 10% of Portland's unsheltered population evicted weekly one can only imagine how many times the average resident living on the streets experiences property seizure and displacement a year.
        </div>
        <div className="paragraph">
          While these numbers in themselves are alarming, it is important to remember two additional things. First, in addition to Portland's OPC eviction rate the Oregon Department of Transportation has been carrying out its own campsite evictions which are not included in this data. Second, that the City regularly counts dozens of clustered encampments in a park or along a bike trail as a single "sweep." Based on this we believe
{' '}
          <strong>the true number of people evicted on a weekly basis is far higher</strong>
          {' '}
          than what we can discern from the data available to us. We also believe some of the variability in the weekly counts is attributed to inconsistent reporting of the number of campsite eviction postings, as the number of signs/250 [meter/yard?] areas is not reported by the City and can only be estimated from their One Point of Contact Campsite Clean-ups report.
        </div>
      </div>
    )}
  />
);

Sweeps.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default Sweeps;
