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
          JAN. 6, 2018 REPORT
        </div>
      </div>


      <div className="splash-curve">
        <div className="splash-sub-heading">
          <div className="splash-sub-heading-paragraph">
            In this data and documentary analysis of Portland’s response to houselessness, we examine how our public complaint-driven system has lead to counter-productive sweep-evictions, over-policing and unequal access to hygiene and waste services that harm all. Revealing how punitive policies increase trauma, waste, and barriers to stable housing, we suggest how alternate, evidence-proven programs might fix rather than paper-over our current problems.
          </div>
        </div>

      </div>


    </div>
  </div>
);

export default Splash;
