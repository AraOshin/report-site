import React from 'react';
import PropTypes from 'prop-types';
import PercentVis from '../Visualizations/PercentVis';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'Greater Central Eastside Requests for Police Service';

const PolicingCES = ({ toggleExpandedSubsection }) => (
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
                Central Eastside
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
                Dispatched Calls to Police
              </div>
              <div>
                Central Eastside
              </div>
              <div>
                (Change in Raw Counts)
              </div>
            </div>


          )}
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
    subHeadingText=" Crime Report Counts and Dispatched Call Counts"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">Across all crime types, the three neighborhoods of Hosford-Abernethy, Buckman and Kerns (together) saw a 2.2% increase in total crime reports from 2016 to 2017, and a 1.2% decrease in total crime reports from 2017 to 2018 (Jan-Oct). The CEID boundaries (above) are a subset of these three neighborhoods, crossing the eastside of all three, so data from the Central Eastside Industrial District is subsumed in this section.</div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">The three geographic areas reported here all show change in crime from one year to the next in aggregate, absolute counts of crime reports. No area shows the 64% reported by the CEIC for the Central Eastside Industrial District.</div>
        <div className="paragraph">
          This section has engaged in a high level analysis at summarizing totals across Portland and the Central Eastside, and one deeper dive into trends over time in the CEID. Neighbor2neighbor plans a deeper dive into policing and crime reporting, and if you're interested in volunteering, please contact
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
