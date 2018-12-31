import React from 'react';

const Splash = () => (
  <div className="splash">

    <div className="splash-background">
      <img className="logo" src="/static/logo.svg" alt="NeighborToNeighbor Logo" />
      <div className="splash-heading">
        COUNTING THE WAYS CITY ACTIONS IMPACT PORTLANDERS EXPERIENCING HOUSELESSNESS
      </div>

      <div className="splash-curve">
        <div className="splash-sub-heading">
          <div className="splash-sub-heading-title">
            JAN. 6, 2018 REPORT
          </div>
          <div className="splash-sub-heading-paragraph">
            Report about requests for services (9-1-1 and non-emergency police, public reports of campsites, crime reports) compared with patterns of city campsite sweeping/clean-up, comparing August-November 2017 to August-November 2018 to look for increases in requests in the Central Eastside.
          </div>
        </div>

      </div>


    </div>
  </div>
);

export default Splash;
