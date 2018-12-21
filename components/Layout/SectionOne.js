
import React from 'react';

const SectionOne = () => (

  <div className="report section-one">

    <div className="inner-section">

      <div className="report-text heading">
        Policing Report
      </div>


      <div className="report-columns">
        <div className="text-col">
          <div className="report-text sub-heading">
            Policing Subsection One Title
          </div>
          <div className="spacer-line" />
          <div className="paragraph-container">
            <div className="paragraph-container-sub">
              <div className="paragraph">
                This diagram is a comparison of requests to services for policing in 2017 and 2018.
              </div>
              <div className="paragraph">
                Pellentesque habitant hyperlink style senectus et netus et malesuada fames ac turpis egestas. Cras velit elit, finibus eget mattis sit amet, maximus vitae urna. Duis a nulla arcu. Aenean ut magna sed tellus vehicula euismod. Vivamus aliquam in diam sit amet feugiat. Curabitur id neque sit amet libero aliquet aliquam tempor dapibus felis.

              </div>

            </div>
          </div>
          <div className="read-more-button">
            Read More
          </div>


        </div>
        <div className="vis-col">
          <div className="report-vis">
            <img src="/static/chart 1.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SectionOne;
