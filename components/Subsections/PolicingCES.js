import React from 'react';
import PropTypes from 'prop-types';
import PercentVis from '../Visualizations/PercentVis';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'Crime Report Counts in The Central Eastside Industrial Area';

const PolicingCES = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={(
      <div className="percent-vis-row">
        <PercentVis
          title="How Crime Statistics Can Mislead"
          percentages={
            [
              {
                percent: -1.6,
                years: '2016-2017',
                months: 'Jan - Oct',
              },
              {
                percent: 6.2,
                years: '2017-2018',
                months: 'Oct - Aug',
              },
            ]
          }
        />

        <PercentVis
          title="Dispatched Calls to Police, Central Eastside (Change in Raw Counts)"
          percentages={
            [
              {
                percent: 8.8,
                years: '2016-2017',
                months: 'Jan - Oct',
              },
              {
                percent: 0.4,
                years: '2017-2018',
                months: 'Oct - Aug',
              },
            ]
          }
        />
      </div>
    )}
    subsectionId={HEADING_TEXT}
    headingText={HEADING_TEXT}
    subHeadingText="Policing Data (crime figures are mock) in 2016, 2017, 2018"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">Across all crime types, the three neighborhoods of Hosford-Abernethy, Buckman and Kerns (together) saw a 2.2% increase in total crime reports from 2016 to 2017, and a 1.2% decrease in total crime reports from 2017 to 2018 (Jan-Oct). The CEID boundaries (above) are a subset of these three neighborhoods, crossing the eastside of all three, so data from the Central Eastside Industrial District is subsumed in this section.</div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">Having said that, it is important to note that policing statistics are inherently difficult to draw reliable inferences from due to how and who in the the public calls the police and how and who the police opt to fine or arrest.</div>
        <div className="paragraph">Dispatched calls XXX</div>
        <div className="paragraph">The three geographic areas reported here all show change in crime from one year to the next in aggregate, absolute counts of crime reports. All three areas show much smaller variation than the 64% reported by the CEIC for the Central Eastside Industrial District.</div>
        <div className="paragraph">
          Why the disparity in reporting? It is known that several factors can influence crime reporting. These include population changes/density, urbanization, variations in population age and stability, patterns of mobility and commuting, economic conditions, cultural factors, family conditions, climate, citizens' attitudes towards crime, and reporting practices. Additionally, other factors surrounding the criminal justice system and impact of law enforcement may distort crime statistics in ways that make it hard to draw reliable inferences (see the FBI UCR system on how to use crime statistics responsibly; while Portland no longer uses UCR
<em>–</em>
          they switched to NIBRS in 2015, which is another way of reporting crime
<em>–</em>
          these factors still hold for dealing responsibly with crime reports in general
{' '}
          <a href="https://ucr.fbi.gov/ucr-statistics-their-proper-use">https://ucr.fbi.gov/ucr-statistics-their-proper-use</a>
          ).
        </div>
        <div className="paragraph">
          <strong>It is highly irresponsible and disingenuous to base policy on a single increase in crime reports from a small geographic area with high variability in crime report counts</strong>
          . Much more care needs to be taken when looking at crime data, even in the aggregates that we report here. This section has engaged in a high level analysis at summarizing totals across Portland and the Central Eastside, and one deeper dive into trends over time in the CEID. Neighbor2neighbor plans a deeper dive into policing and crime reporting, and if you're interested in volunteering, please contact
{' '}
          <a href="mailto:n2npdx@gmail.com">n2npdx@gmail.com</a>
          .
        </div>

      </div>
    )}
  />
);

PolicingCES.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default PolicingCES;
