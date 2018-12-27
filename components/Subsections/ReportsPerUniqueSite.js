import React from 'react';
import PropTypes from 'prop-types';
import LineChart from '../Visualizations/LineChart';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'Placeholder for Reports per UniqueSite';

const ReportsPerUniqueSite = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow={false}
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={<LineChart dataContext="avgReportsPerUniqueSitesByMonth" legendLabel="Avgerage Reports per estimated campsite per month" />}
    subsectionId={HEADING_TEXT}
    headingText={HEADING_TEXT}
    subHeadingText="This is a Placeholder: Vis Coming Soon"
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

ReportsPerUniqueSite.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default ReportsPerUniqueSite;
