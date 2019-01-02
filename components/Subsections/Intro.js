import React from 'react';
import PropTypes from 'prop-types';
import Subsection from '../Layout/Subsection';
import IntroPie from '../Visualizations/IntroPie';


const Intro = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow={false}
    disableSticky
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={(
      <IntroPie />
    )


    }
    headingText="Intro Section Heading Intro Section Heading Intro Section Heading"
    subHeadingText="Intro Section SubHeading Intro Section SubHeading Intro Section SubHeading Intro Section SubHeading"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">
          While it is not a crime to be homeless, our city, state, and so-called private sector “business improvement” or “enhanced service”  districts have established over 224 rules and laws that make it illegal for those living on the streets to perform necessary life sustaining activities in the public spaces  (ACLU Oregon, Decriminalizing Homelessness 2017).   It is illegal to sleep or protect survival gear using a tarp or tent on the streets of Portland. It is also illegal to wash, care for one’s body, or relieve oneself outdoors.  Yet retail stores, eateries, and offices exclude neighbors experiencing houselessness from using the very same indoor bathrooms and showers that they freely offer to housed portlanders as they move about the city (Hawash, Goes Behind, Kimball,  2016; Harbarger, 01/15/2018; Wicks,  03/03/2017). Likewise, the City of Portland offers no reliable waste pick-up services to those who live on the streets, yet may fine or punish houseless neighbors for the household waste they and unscrupulous housed individuals dispose of in nearby public places (Dooris, 11/13/2018; Green, 11/9/2018).*
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


Intro.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};


export default Intro;
