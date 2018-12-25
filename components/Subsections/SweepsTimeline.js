import React from 'react';
import Subsection from '../Layout/Subsection';


const SweepTimeline = () => (
  <Subsection
    isRow={false}
    vis={
      (
        <div>
          <img className="responsive-img" src="./static/police_img.png" />
        </div>
      )}
    expandedVis={
      (
        <div>
          <img className="responsive-img" src="./static/police_img.png" />
          <img className="responsive-img" src="./static/police_img.png" />
          <img className="responsive-img" src="./static/police_img.png" />
          <img className="responsive-img" src="./static/police_img.png" />
          <img className="responsive-img" src="./static/police_img.png" />
        </div>
      )}
    headingText="Timeline of a campsite sweep in photos"
    subHeadingText="Sweeps Cause Trauma and are Bad for the Environment"
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

export default SweepTimeline;
