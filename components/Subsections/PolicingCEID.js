import React from 'react';
import PropTypes from 'prop-types';
import PercentVis from '../Visualizations/PercentVis';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'Crime Report Counts in The Central Eastside Industrial Area';

const PolicingCEID = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={(
      <div className="percent-vis-row">
        <PercentVis
          title={(

            <div>
              <div>
                Filed Crime Reports
              </div>
              <div>
                CEID
              </div>
              <div>
                (Change in Raw Counts)
              </div>
            </div>


          )}
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

          title={(

            <div>
              <div>
                Personal/Property Filed Crime Reports
              </div>
              <div>
                CEID
              </div>
              <div>
                (Change in Raw Counts)
              </div>
            </div>


          )}
          percentages={
            [
              {
                percent: -1.1,
                years: '2016-2017',
                months: 'Jan - Oct',
              },
              {
                percent: 5.7,
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
    subHeadingText="How Crime Statistics Can Mislead"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">
          The Central Eastside Industrial Council (CEIC, a local business group) claims that "increases in unwanted crime and grime, including a 64% increase in crimes against people and property in the past year, have pervaded the district and threaten Central Eastside's emerging reputation and business viability." Our findings dispute the CEIC's claim.
{' '}
          <strong>Looking from 2015-2018 there is no significant upward trend in crime reports made in the Central Eastside Industrial District boundaries, and a comparison of all data available in 2017 and 2018 (January- October) shows only a 5.7% increase in crime reports. </strong>
          A time series model predicts no significant increase over the next year as well. Additionally, we request more transparency from the CEIC regarding data source and methodology, as this analysis does not replicate the crime statistics their proposal contains. When private security forces are invited to patrol public space,
<strong> with none of the customary public oversight or accountability of public policing,</strong>
          {' '}
          historically targeted/over-policed populations are placed in a particularly vulnerable position.
        </div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">
          We used Venture Portland's business district boundary map to obtain a polygon of the boundaries for the CEID, and subset the crime reports data down to crime reports with lat/long coordinates that fall within those boundaries (
<a href="http://ventureportland.org/business-districts/business-district-map/">ventureportland.org</a>
          ). Crime reports without lat/long are not included in this report. We then subset out person and property crimes as the CEIC did, using the offense categories that are reported through the Portland Police Bureau (
<a href="https://www.portlandoregon.gov/police/71978">portlandoregon.gov</a>
          ). This gave us a total of all person and property crime reports for the CEID over the total period for which this data is available in a comparable format through the PPB (2015-2018: the PPB changed their data reporting practices from UCR to NIBRS in 2015 and so data prior to 2015 is not directly comparable; see
{' '}
          <a href="https://www.portlandoregon.gov/police/71978">portlandoregon.gov</a>
          ). With this dataset, we were unable to replicate their results.
        </div>
        <div className="paragraph">When running totals of crime report counts are taken into account from January through October, a comparison of the January-October 2017 period to January-October 2018 shows only a 5.7% increase in person and property crime (at the time of analysis, November/December 2018 was not yet available). From January-October 2016-2017, there was a -1.1% change in person/property crime reports. Total crime counts were not normalized to any population increase that happened during this time (which means the 5.7% increase would most likely be smaller, per capita). For all crime, the CEID saw a -1.6% change in crime reports from 2016-2017, and a 6.2% change from 2017-2018 (the difference is that society crimes are included in this subset, in addition to person and property crimes).</div>
      </div>
    )}
  />
);

PolicingCEID.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default PolicingCEID;
