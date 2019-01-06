import React from 'react';

const Splash = () => (
  <div className="splash">

    <div className="splash-background">
      <div className="splash-top">
        <img className="logo" src="/static/logo.svg" alt="NeighborToNeighbor Logo" />
        <div className="splash-heading">
          Counting the Ways City Policies Impact Portlanders Experiencing Houselessness

        </div>
        <div className="splash-heading-title">
          JAN. 6, 2019 REPORT
        </div>
      </div>


      <div className="splash-curve">
        <div className="splash-sub-heading">
          <div className="splash-sub-heading-paragraph">
            In this combined data and documentary analysis of Portland’s response to houselessness, we examine how our public complaint-driven reporting system informs street evictions, or ‘sweeps’, which cause repeated harm and trauma to those who are evicted and displaced.  Our analysis looks at how policies and inflation of crime statistics affect trauma, waste, and barriers to stable housing.  We suggest alternative, evidence-proven programs.
          </div>
        </div>

      </div>


    </div>
  </div>
);

export default Splash;
