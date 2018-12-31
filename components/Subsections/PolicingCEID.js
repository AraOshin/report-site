import React from 'react';
import PropTypes from 'prop-types';
import { SSL_OP_NO_TLSv1_1 } from 'constants';
import PercentVis from '../Visualizations/PercentVis';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'Policing CEID';

const PolicingCEID = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={(
      <div className="percent-vis-row">
        <PercentVis
          title="total crime reports filed "
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
          title="total personal/ prop crime reports"
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
    subHeadingText="Policing Data (crime figures are mock) in 2016, 2017, 2018"
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

PolicingCEID.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default PolicingCEID;
